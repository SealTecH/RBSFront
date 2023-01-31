import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {
   BehaviorSubject, take, map, shareReplay, combineLatest, startWith
} from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PhoneRootService } from '../phone-root.service';
import { PhoneBrandTree, PhoneDevice } from '../../../platform/connection/phone.interfaces';
import { Repair } from '../interfaces';
import { RepairStatus } from '../enums';
import { RepairRecordedSnackComponent } from '../snacks/repair-recored-snack.component';

// eslint-disable-next-line no-shadow
enum ProcessState {
  Manufacturer,
  Model,
  Malfunction,
  Pass,
  Final
}
@Component({
   selector: 'phone-repair',
   templateUrl: './repair.component.html',
   styleUrls: ['./repair.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepairComponent {
   readonly ProcessState = ProcessState;
   readonly passButtons = [...Array(10).keys()].slice(1);
   readonly state$ = new BehaviorSubject<ProcessState>(ProcessState.Manufacturer);
   readonly searchControl = new FormControl('');
   readonly manufacturers$ = combineLatest([
      this.searchControl.valueChanges.pipe(startWith('')),
      this.phoneRootService.manufacturers$]).pipe(
      map(([search, manufacturers]) => (!search
         ? manufacturers : manufacturers.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase())))),
      shareReplay(1)
   );

   readonly phoneBrandTree$ = this.phoneRootService.phoneBrandTree$;
   readonly malfunctions$ = this.phoneRootService.malfunctions$;
   selectedManufacturer: number | null = null;
   selectedModel: number | null = null;
   selectedMalfunctions: number[] = [];
   graphPass: number[] = [];

   customManufacturer: string | null = null;
   customModel: string | null = null;
   customMalfunction: string | null = null;

   readonly passwordControl = new FormControl('');
   readonly costControl = new FormControl<number | null>(null);
   readonly commentsControl = new FormControl('');
   readonly imeiControl = new FormControl<number | null>(null);
   constructor(private phoneRootService: PhoneRootService,
               private router: Router,
               private cd: ChangeDetectorRef,
               private snackBar: MatSnackBar) {

   }

   getModelsCollection(tree: PhoneBrandTree): PhoneDevice[] {
      if (!this.selectedManufacturer) {
         return [];
      }

      const devices = tree.get(this.selectedManufacturer!)!;

      return !this.searchControl.value
         ? devices.slice(0, 50)
         : devices.filter(device => device.name.toLowerCase().includes(this.searchControl.value!.toLowerCase())).slice(0, 20);
   }

   selectManufacturer(id: number): void {
      this.selectedManufacturer = id;
      this.state$.next(ProcessState.Model);
   }

   selectModel(id: number): void {
      this.selectedModel = id;
      this.state$.next(ProcessState.Malfunction);
   }

   selectMalfunction(id: number): void {
      if (!this.selectedMalfunctions.includes(id)) {
         this.selectedMalfunctions.push(id);
      } else {
         this.selectedMalfunctions.splice(this.selectedMalfunctions.indexOf(id), 1);
      }

      this.cd.markForCheck();
   }

   onMalfunctionProceed(): void {
      this.state$.next(ProcessState.Pass);
   }

   graphPassAdd(dot: number): void {
      this.graphPass.push(dot);
   }

   graphPassReset(): void {
      this.graphPass = [];
   }

   onPassProceed(): void {
      this.state$.next(ProcessState.Final);
   }

   onFinish(): void {
      const repair: Repair = {
         id: '',
         manufacturerId: this.selectedManufacturer,
         modelId: this.selectedModel,
         malfunctions: this.selectedMalfunctions,
         pass: this.passwordControl.value,
         graphPass: this.graphPass,
         cost: this.costControl.value,
         comments: this.commentsControl.value,
         imei: this.imeiControl.value,
         createDate: new Date().getTime(),
         customManufacturer: this.customManufacturer,
         customModel: this.customModel,
         customMalfunction: this.customMalfunction,
         status: RepairStatus.WaitingRepair
      };

      this.phoneRootService.createRepair(repair);
      this.cancelRepair();
      this.snackBar.openFromComponent(RepairRecordedSnackComponent, {
         duration: 2000
      });
   }

   cancelRepair(): void {
      this.state$.next(ProcessState.Manufacturer);
      this.selectedManufacturer = null;
      this.selectedModel = null;
      this.selectedMalfunctions = [];
      this.graphPass = [];
      this.searchControl.setValue(null);
   }

   toPreviousState(): void {
      this.state$.pipe(take(1)).subscribe((state) => {
         this.state$.next(state === ProcessState.Malfunction && !this.selectedModel ? ProcessState.Manufacturer : state - 1);
      });
   }

   toNextState(): void {
      this.state$.pipe(take(1)).subscribe((state) => {
         switch (state) {
         case ProcessState.Manufacturer:
            this.state$.next(ProcessState.Malfunction);
            this.selectedManufacturer = null;
            this.selectedModel = null;
            this.customManufacturer = this.searchControl.value;
            this.searchControl.setValue(null);
            break;
         case ProcessState.Model:
            this.state$.next(ProcessState.Malfunction);
            this.selectedModel = null;
            this.customModel = this.searchControl.value;
            this.searchControl.setValue(null);
            break;
         case ProcessState.Malfunction:
            this.state$.next(ProcessState.Pass);
            this.customMalfunction = this.searchControl.value;
            this.selectedMalfunctions = [];
            break;
         case ProcessState.Pass:
            this.state$.next(ProcessState.Final);
            this.graphPass = [];
            break;
         default: break;
         }
      });
   }

   openDashboard(): void {
      this.router.navigate(['../']);
   }
}
