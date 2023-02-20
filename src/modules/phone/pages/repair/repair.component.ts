import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {
   BehaviorSubject, take, map, shareReplay, startWith, Observable
} from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PhoneRootService } from '../../phone-root.service';
import { Repair, PhoneDevice, Manufacturer } from '../../interfaces';
import { RepairStatus } from '../../enums';
import { RepairRecordedSnackComponent } from '../../components/snacks/repair-recored-snack.component';

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
   selectedManufacturer: number | null = null;
   selectedModel: number | null = null;
   selectedMalfunctions: number[] = [];

   readonly manufacturers$: Observable<Manufacturer[]> = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(search => (!search
         ? Array.from(this.phoneRootService.manufacturers.values())
         : Array.from(this.phoneRootService.manufacturers.values())
            .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase())))),
      shareReplay(1)
   );

   readonly models$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((search): PhoneDevice[] => {
         if (!this.selectedManufacturer) {
            return [];
         }

         return !search
            ? this.phoneRootService.phoneBrandTree.get(this.selectedManufacturer)!
            : this.phoneRootService.phoneBrandTree.get(this.selectedManufacturer)!
               .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()));
      }),
      map(devices => devices!.slice(0, this.searchControl.value ? 20 : 50)),
      shareReplay(1)
   );

   readonly malfunctions = this.phoneRootService.malfunctions;
   graphPass: number[] = [];

   customManufacturer: string | null = null;
   customModel: string | null = null;
   customMalfunction: string | null = null;

   readonly passwordControl = new FormControl('');
   readonly costControl = new FormControl<number | null>(null);
   readonly phoneNumberControl = new FormControl<string | null>(null);
   readonly commentsControl = new FormControl('');
   readonly imeiControl = new FormControl<number | null>(null);
   constructor(private phoneRootService: PhoneRootService,
               private router: Router,
               private cd: ChangeDetectorRef,
               private snackBar: MatSnackBar) {

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
         phoneNumber: this.phoneNumberControl.value,
         imei: this.imeiControl.value,
         createDate: new Date().getTime(),
         customManufacturer: this.customManufacturer,
         customModel: this.customModel,
         customMalfunction: this.customMalfunction,
         status: RepairStatus.WaitingRepair
      };

      this.phoneRootService.createRepair(repair).subscribe(() => {
         this.cancelRepair();
         this.snackBar.openFromComponent(RepairRecordedSnackComponent, {
            duration: 2000
         });
      });
   }

   cancelRepair(): void {
      this.state$.next(ProcessState.Manufacturer);
      this.selectedManufacturer = null;
      this.selectedModel = null;
      this.selectedMalfunctions = [];
      this.graphPass = [];
      this.searchControl.setValue(null);
      this.costControl.setValue(null);
      this.imeiControl.setValue(null);
      this.commentsControl.setValue(null);
      this.phoneNumberControl.setValue(null);
      this.passwordControl.setValue(null);
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
