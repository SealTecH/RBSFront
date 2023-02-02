import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
   selector: 'edit-graph-pass-dialog',
   templateUrl: './edit-graph-pass-dialog.component.html',
   styleUrls: ['./edit-graph-pass-dialog.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditGraphPassDialogComponent {
   constructor(
    public dialogRef: MatDialogRef<EditGraphPassDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number[]
   ) {}

   cancel(): void {
      this.dialogRef.close();
   }
}
