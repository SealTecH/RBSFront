import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {
   take, map, startWith, combineLatest, shareReplay, tap, BehaviorSubject
} from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { omit } from 'lodash-es';
import { PhoneRoutes, RepairStatus } from '../../enums';
import { Unsubscriber } from '../../../../utils/unsubscriber/unsubscriber';
import { PhoneBrandTree } from '../../../../platform/connection/phone.interfaces';
import {
   ConfirmDialogComponent,
   ConfirmDialogData
} from '../../../../platform/dialogs/confirm-dialog/confirm-dialog.component';
import {
   SelectActionDialogComponent,
   SelectActionDialogData
} from '../../../../platform/dialogs/select-action-dialog/select-action-dialog.component';
import { Repair } from '../../interfaces';
import { PhoneRootService } from '../../phone-root.service';
import { toDateString } from '../../../../platform/utils/functions';

interface DashboardRepair extends Repair {
  manufacturer: string | null;
  model: string | null;
  malfunction: string | null;
}

@Component({
   selector: 'phone-dashboard',
   templateUrl: './phone-dashboard.component.html',
   styleUrls: ['./phone-dashboard.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhoneDashboardComponent extends Unsubscriber {
   readonly RepairStatus = RepairStatus;
   readonly columns = ['model', 'malfunction', 'cost', 'created', 'comments', 'status'];
   readonly loading$ = this.phoneRootService.loading$;
   readonly searchControl = new FormControl('');
   readonly hideDoneControl = new FormControl<boolean>(true);
   readonly mobileMode$ = this.breakpointObserver.observe(['(min-width: 600px)']).pipe(
      map(state => state.matches)
   );

   readonly repairsFiltered$ = combineLatest([
      this.searchControl.valueChanges.pipe(startWith('')),
      this.hideDoneControl.valueChanges.pipe(startWith(this.hideDoneControl.value)),
      this.phoneRootService.repairs$.pipe(map(repairs => this.normalizeRepairs(repairs)))
   ]).pipe(
      map(([search, hideDone, repairs]): [string| null, DashboardRepair[]] => {
         if (hideDone) {
            return [search, repairs.filter(repair => repair.status !== RepairStatus.Done)];
         }

         return [search, repairs];
      }),
      map(([search, repairs]) => {
         if (!search) {
            return repairs;
         }

         const searchValue = search.toLowerCase().trim();

         return repairs.filter(repair => repair.manufacturer?.toLowerCase().includes(searchValue)
           || repair.model?.toLowerCase().includes(searchValue)
           || repair.malfunction?.toLowerCase().includes(searchValue)
            || repair.comments?.toLowerCase().includes(searchValue)
            || repair.phoneNumber?.toLowerCase().includes(searchValue)
            || repair.imei?.toString().includes(searchValue));
      }),
      tap((repairs) => {
         if (this.selectedRow && !repairs.some(({ id }) => id === this.selectedRow!.id)) {
            this.selectedRow = null;
         }
      }),
      shareReplay(1)
   );

   carouselIndex$ = new BehaviorSubject<number>(0);
   carouselItem$ = combineLatest([this.repairsFiltered$, this.carouselIndex$]).pipe(map(([repairs, index]) => repairs[index]));

   selectedRow: Repair | null = null;
   constructor(private router: Router,
               private phoneRootService: PhoneRootService,
               private dialog: MatDialog,
               public breakpointObserver: BreakpointObserver) {
      super();
   }

   createNewRepair(): void {
      this.router.navigate([PhoneRoutes.Repair]);
   }

   goToDetails(repair?: Repair): void {
      this.router.navigate([PhoneRoutes.Repair, repair?.id || this.selectedRow!.id]);
   }

   clearSearch(): void {
      this.searchControl.setValue('');
   }

   getModel(tree: PhoneBrandTree, brandId: number, id: number): string | undefined {
      return tree.get(brandId)?.find(device => device.id === id)?.name;
   }

   getDate(date: number): string {
      return toDateString(date);
   }

   showPrevRepair(): void {
      if (this.carouselIndex$.value > 0) {
         this.carouselIndex$.next(this.carouselIndex$.value - 1);
      }
   }

   showNextRepair(): void {
      this.subs = this.repairsFiltered$.pipe(take(1)).subscribe((repairs) => {
         if (this.carouselIndex$.value < repairs.length - 1) {
            this.carouselIndex$.next(this.carouselIndex$.value + 1);
         }
      });
   }

   selectRow(repair: Repair): void {
      if (this.selectedRow?.id === repair.id) {
         this.selectedRow = null;
      } else {
         this.selectedRow = repair;
      }
   }

   deleteRow(repair?: Repair): void {
      const dialogRef = this.dialog.open<ConfirmDialogComponent, ConfirmDialogData, boolean>(ConfirmDialogComponent, {
         data: { title: 'Confirm Delete', message: 'Do you confirm deletion of selected record?' }
      });

      dialogRef.afterClosed().pipe(take(1)).subscribe((result) => {
         if (result) {
            this.subs = this.phoneRootService.deleteRepair(repair?.id || this.selectedRow!.id).subscribe(() => {
               this.selectedRow = null;
            });
         }
      });
   }

   changeStatus(repair?: Repair): void {
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
            this.subs = this.phoneRootService.updateRepair({
               ...omit((repair || this.selectedRow!), ['manufacturer', 'model', 'malfunction']),
               status: result
            }).subscribe(() => this.selectedRow = null);
         }
      });
   }

   duplicateRepair(id?: string): void {
      this.phoneRootService.duplicateRepair(id || this.selectedRow!.id).subscribe();
   }

   private normalizeRepairs(repairs: Repair[]): DashboardRepair[] {
      return repairs.map(repair => ({
         ...repair,
         manufacturer: repair.manufacturerId
            ? this.phoneRootService.manufacturers.find(r => r.id === repair.manufacturerId!)!.name : repair.customManufacturer,
         model: repair.modelId
            ? this.phoneRootService.phoneBrandTree.get(repair.manufacturerId!)!.find(model => model.id === repair.modelId)!.name
            : repair.customModel,
         malfunction: repair.malfunctions.length
            ? repair.malfunctions.map(malfunction => this.phoneRootService.malfunctions.find(m => malfunction === m.id)!.name)
               .join(', ').concat(repair.customMalfunction ? `, ${repair.customMalfunction}` : '')
            : repair.customMalfunction
      }));
   }
}
