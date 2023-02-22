import {
   Component, ChangeDetectionStrategy, OnInit, ViewChildren, QueryList
} from '@angular/core';
import { Router } from '@angular/router';
import {
   take, map, combineLatest, tap, BehaviorSubject
} from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PhoneRoutes, RepairStatus } from '../../enums';
import { Unsubscriber } from '../../../../utils/unsubscriber/unsubscriber';
import {
   ConfirmDialogComponent,
   ConfirmDialogData
} from '../../../../platform/dialogs/confirm-dialog/confirm-dialog.component';
import {
   SelectActionDialogComponent,
   SelectActionDialogData
} from '../../../../platform/dialogs/select-action-dialog/select-action-dialog.component';
import { Repair, PhoneBrandTree } from '../../interfaces';
import { toDateString } from '../../../../platform/utils/functions';
import { ResolutionService } from '../../../../platform/services/resolution/resolution.service';
import { RepairHistoryDialogComponent } from '../../dialogs/repair-history-dialog/repair-history-dialog.component';
import { PhoneDashboardService, DashboardRepair } from './phone-dashboard.service';

@Component({
   selector: 'phone-dashboard',
   templateUrl: './phone-dashboard.component.html',
   styleUrls: ['./phone-dashboard.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
   providers: [PhoneDashboardService]
})
export class PhoneDashboardComponent extends Unsubscriber implements OnInit {
   readonly columns = ['model', 'malfunction', 'cost', 'created', 'comments', 'status'];
   readonly loading$ = this.service.loading$;
   readonly searchControl = new FormControl('');
   readonly hideDoneControl = new FormControl<boolean>(true);
   readonly pcMode$ = this.resolutionService.pcMode$;
   readonly dataSource = new MatTableDataSource<DashboardRepair>([]);

  @ViewChildren(MatPaginator) paginator: QueryList<MatPaginator>;

  carouselIndex$ = new BehaviorSubject<number>(0);
  carouselItem$ = combineLatest([this.service.data$, this.carouselIndex$]).pipe(map(([repairs, index]) => repairs[index]));

  selectedRow: DashboardRepair | null = null;
  constructor(private router: Router,
               private service: PhoneDashboardService,
               private dialog: MatDialog,
               private resolutionService: ResolutionService) {
     super();
  }

  ngOnInit(): void {
     this.service.init(this.searchControl, this.hideDoneControl);
     this.subs = this.service.data$.pipe(
        tap((repairs) => {
           if (this.selectedRow && !repairs.some(({ id }) => id === this.selectedRow!.id)) {
              this.selectedRow = null;
           }
        })
     ).subscribe((repairs) => {
        this.dataSource.data = repairs;
     });
     this.subs = this.hideDoneControl.valueChanges.subscribe(() => {
        if (this.paginator.first) {
           this.paginator.first.firstPage();
        }
     });
  }

  ngAfterViewInit(): void {
     this.dataSource.paginator = this.paginator.first;
     this.subs = this.paginator.changes.subscribe(() => {
        this.dataSource.paginator = this.paginator.first;
     });
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
     if (this.carouselIndex$.value < this.dataSource.data.length - 1) {
        this.carouselIndex$.next(this.carouselIndex$.value + 1);
     }
  }

  selectRow(repair: DashboardRepair): void {
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
           this.subs = this.service.deleteRepair(repair?.id || this.selectedRow!.id).subscribe(() => {
              this.selectedRow = null;
           });
        }
     });
  }

  changeStatus(repair?: DashboardRepair): void {
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
           this.subs = this.service.updateStatus(repair || this.selectedRow!, result).subscribe(() => this.selectedRow = null);
        }
     });
  }

  duplicateRepair(id?: string): void {
     this.service.duplicateRepair(id || this.selectedRow!.id);
  }

  showHistory(id: string): void {
     this.dialog.open<RepairHistoryDialogComponent,
      Repair, RepairStatus>(RepairHistoryDialogComponent, {
         data: this.service.getRawRepair(id || this.selectedRow!.id)
      });
  }
}
