import {
   ChangeDetectionStrategy, Component, Inject, OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Repair } from '../../interfaces';
import { RepairHistoryDialogService } from './repair-history-dialog.service';

@Component({
   selector: 'repair-history-dialog',
   standalone: true,
   imports: [CommonModule, MatDialogModule, MatButtonModule, MatTableModule],
   templateUrl: './repair-history-dialog.component.html',
   styleUrls: ['./repair-history-dialog.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
   providers: [RepairHistoryDialogService]
})
export class RepairHistoryDialogComponent implements OnInit {
   columns = ['modifiedDate', 'user', 'change'];
   loading$ = this.service.loading$;
   history$ = this.service.data$;
   title = this.service.getTitle(this.data);
   constructor(
    @Inject(MAT_DIALOG_DATA) public data: Repair,
    private service: RepairHistoryDialogService
   ) {
      this.service.getHistory(data.id);
   }

   ngOnInit(): void {

   }
}
