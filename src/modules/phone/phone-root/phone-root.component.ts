import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PhoneRoutes, RepairStatus } from '../enums';
import { Unsubscriber } from '../../../utils/unsubscriber/unsubscriber';
import { PhoneBrand, PhoneBrandTree, Malfunction } from '../../../platform/connection/phone.interfaces';
import {
   ConfirmDialogComponent,
   ConfirmDialogData
} from '../../../platform/dialogs/confirm-dialog/confirm-dialog.component';
import {
   SelectActionDialogComponent,
   SelectActionDialogData
} from '../../../platform/dialogs/select-action-dialog/select-action-dialog.component';
import { Repair } from '../interfaces';
import { PhoneRootService } from '../phone-root.service';

@Component({
   selector: 'phone-root',
   templateUrl: './phone-root.component.html',
   styleUrls: ['./phone-root.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhoneRootComponent extends Unsubscriber implements OnInit {
   readonly columns = ['manufacturer', 'model', 'malfunction', 'cost', 'created', 'comments', 'status'];
   readonly loading$ = this.phoneRootService.loading$;
   readonly manufacturers$ = this.phoneRootService.manufacturers$;
   readonly phoneBrandTree$ = this.phoneRootService.phoneBrandTree$;
   readonly malfunctions$ = this.phoneRootService.malfunctions$;
   readonly repairs$ = this.phoneRootService.repairs$;
   selectedRowId: number | null = null;
   constructor(private router: Router,
               private phoneRootService: PhoneRootService,
               private dialog: MatDialog) {
      super();
   }

   ngOnInit(): void {
      this.subs = this.phoneRootService.init().subscribe();
   }

   createNewRepair(): void {
      this.router.navigate([PhoneRoutes.Repair]);
   }

   goToDetails(): void {
      this.router.navigate([PhoneRoutes.Repair, this.selectedRowId]);
   }

   getManufacturer(brands: PhoneBrand[], id: number): string | undefined {
      return brands.find(brand => brand.id === id)?.name;
   }

   getModel(tree: PhoneBrandTree, brandId: number, id: number): string | undefined {
      return tree.get(brandId)?.find(device => device.id === id)?.name;
   }

   getMalfunction(malfunctionsSource: Malfunction[], ids: number[]): string {
      return ids.map(id => malfunctionsSource.find(malfunction => malfunction.id === id)?.name).join(',');
   }

   getDate(date: number): string {
      return new Date(date).toDateString();
   }

   selectRow({ id }: Repair): void {
      if (this.selectedRowId === id) {
         this.selectedRowId = null;
      } else {
         this.selectedRowId ??= id;
      }
   }

   deleteRow(): void {
      const dialogRef = this.dialog.open<ConfirmDialogComponent, ConfirmDialogData, boolean>(ConfirmDialogComponent, {
         data: { title: 'Confirm Delete', message: 'Do you confirm deletion of selected record?' }
      });

      dialogRef.afterClosed().pipe(take(1)).subscribe((result) => {
         if (result) {
            this.phoneRootService.deleteRepair(this.selectedRowId!);
            this.selectedRowId = null;
         }
      });
   }

   changeStatus(): void {
      const dialogRef = this.dialog.open<SelectActionDialogComponent<RepairStatus>,
        SelectActionDialogData<RepairStatus>, RepairStatus>(SelectActionDialogComponent, {
           data: {
              title: 'Change Repair Status',
              message: 'Select new repair status',
              dropdownTitle: 'Repair status',
              dropdownList: Object.entries(RepairStatus).map(([key, value]) => ({ label: key, value }))
           }
        });

      dialogRef.afterClosed().pipe(take(1)).subscribe((result) => {
         if (result) {
            this.phoneRootService.changeRepairStatus(this.selectedRowId!, result);
            this.selectedRowId = null;
         }
      });
   }
}
