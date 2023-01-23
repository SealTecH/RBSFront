import {
   Component, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PhoneRootService } from '../phone-root/phone-root.service';
import { PhoneBrandTree, PhoneDevice, Repair } from '../../../platform/connection/phone.interfaces';
import { RepairRecordedSnackComponent } from './repair-recored-snack.component';

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
   readonly phoneBrands$ = this.phoneRootService.phoneBrands$;
   readonly phoneBrandTree$ = this.phoneRootService.phoneBrandTree$;
   readonly malfunctions$ = this.phoneRootService.malfunctions$;
   selectedBrand: number | null = null;
   selectedModel: number | null = null;
   selectedMalfunctions: number[] = [];
   graphPass: number[] = [];
   passwordControl = new FormControl('');
   costControl = new FormControl<number | null>(null);
   commentsControl = new FormControl('');
   startDateControl = new FormControl('');
   endDateControl = new FormControl('');
   constructor(
private phoneRootService: PhoneRootService,
               private router: Router,
               private cd: ChangeDetectorRef,
               private snackBar: MatSnackBar
   ) {

   }

   getModelsCollection(tree: PhoneBrandTree): PhoneDevice[] {
      return this.selectedBrand === null ? [] : tree.get(this.selectedBrand!)!;
   }

   selectBrand(id: number): void {
      this.selectedBrand = id;
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
      this.state$.next(ProcessState.Manufacturer);
      this.snackBar.openFromComponent(RepairRecordedSnackComponent, {
         duration: 2000
      });

      const repair: Repair = {
         manufacturerId: this.selectedBrand,
         modelId: this.selectedModel,
         malfunctions: this.selectedMalfunctions,
         pass: this.passwordControl.value,
         graphPass: this.graphPass,
         cost: this.costControl.value,
         comments: this.commentsControl.value,
         repairStartDay: this.startDateControl.value,
         repairEndDay: this.endDateControl.value,
         createDate: new Date().getTime()
      };

      this.phoneRootService.saveRepair(repair);
   }

   cancelRepair(): void {
      this.state$.next(ProcessState.Manufacturer);
      this.selectedBrand = null;
      this.selectedModel = null;
      this.selectedMalfunctions = [];
      this.graphPass = [];
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
            this.selectedBrand = null;
            this.selectedModel = null;
            break;
         case ProcessState.Model:
            this.state$.next(ProcessState.Malfunction);
            this.selectedModel = null;
            break;
         case ProcessState.Malfunction:
            this.state$.next(ProcessState.Pass);
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
