import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
   take, combineLatest, startWith, map, shareReplay
} from 'rxjs';
import {
   FormGroup, FormControl, FormArray, AbstractControl, Validators
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PhoneRootService } from '../phone-root.service';
import { Unsubscriber } from '../../../utils/unsubscriber/unsubscriber';
import { Repair } from '../interfaces';
import { RepairStatus } from '../enums';
import { FormEntity } from '../../../platform/interfaces';
import { PhoneBrandTree, PhoneDevice } from '../../../platform/connection/phone.interfaces';
import { RepairRecordedSnackComponent } from '../snacks/repair-recored-snack.component';

@Component({
   selector: 'repair-details',
   templateUrl: './repair-details.component.html',
   styleUrls: ['./repair-details.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepairDetailsComponent extends Unsubscriber {
   readonly loading$ = this.phoneRootService.loading$;
   readonly manufacturers$ = this.phoneRootService.manufacturers$;
   readonly phoneBrandTree$ = this.phoneRootService.phoneBrandTree$;
   readonly malfunctions$ = this.phoneRootService.malfunctions$;
   readonly statusOptions = Object.entries(RepairStatus).map(([key, value]) => ({ label: key, value }));
   repair: Repair;
   form = new FormGroup<FormEntity<Repair>>({
      id: new FormControl<number>(new Date().getTime(), { nonNullable: true }),
      manufacturerId: new FormControl<number| null>(null),
      modelId: new FormControl<number| null>(null),
      malfunctions: new FormArray([] as AbstractControl[]),
      pass: new FormControl<string| null>(null),
      graphPass: new FormArray([] as AbstractControl[]),
      cost: new FormControl<number| null>(null),
      imei: new FormControl<number| null>(null),
      comments: new FormControl<string| null>(null),
      createDate: new FormControl<number>(new Date().getTime(), { nonNullable: true }),
      customManufacturer: new FormControl<string| null>(null),
      customModel: new FormControl<string| null>(null),
      customMalfunction: new FormControl<string| null>(null),
      status: new FormControl<RepairStatus>(RepairStatus.WaitingRepair, { nonNullable: true })
   });

   constructor(private phoneRootService: PhoneRootService,
               private route: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar) {
      super();
   }

   ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');

      this.subs = this.phoneRootService.getRepairById(Number(id)).pipe(take(1)).subscribe((repair) => {
         this.repair = repair;
         this.setupForm();
      });
   }

   getModelsCollection(tree: PhoneBrandTree): PhoneDevice[] {
      if (!this.form.controls.manufacturerId.value) {
         return [];
      }

      return tree.get(this.form.get('manufacturerId')!.value! as number)!;
   }

   getMalfunctionsControl(): FormArray {
      return (this.form.get('malfunctions')! as FormArray);
   }

   openDashboard(): void {
      this.router.navigate(['../']);
   }

   reset(): void {
      this.setupForm();
   }

   addMalfunction(): void {
      this.getMalfunctionsControl().push(new FormControl<number | null>(null, [Validators.required]));
   }

   removeMalfunction(index: number): void {
      this.getMalfunctionsControl().removeAt(index);
   }

   save(): void {
      this.form.updateValueAndValidity();

      if (this.form.valid) {
         this.phoneRootService.updateRepair(this.form.value as Repair);
         this.snackBar.openFromComponent(RepairRecordedSnackComponent, {
            duration: 2000
         });
      }
   }

   private getGraphPassControl(): FormArray {
      return (this.form.get('graphPass')! as FormArray);
   }

   private setupForm(): void {
      this.form.patchValue(this.repair);
      this.getMalfunctionsControl().clear();
      this.repair.malfunctions.forEach((malfunction) => {
         this.getMalfunctionsControl().push(new FormControl<number>(malfunction, [Validators.required]));
      });

      this.getGraphPassControl().clear();
      this.repair.graphPass.forEach((graphPass) => {
         this.getGraphPassControl().push(new FormControl<number>(graphPass));
      });
   }
}
