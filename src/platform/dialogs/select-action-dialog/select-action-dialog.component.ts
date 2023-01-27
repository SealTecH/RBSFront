import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { SelectOptionInterface } from '../../interfaces';

export interface SelectActionDialogData<T> {
  title: string;
  message: string;
  dropdownTitle: string;
  dropdownList: SelectOptionInterface<T>[];
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
}

@Component({
   selector: 'select-action-dialog',
   standalone: true,
   imports: [CommonModule, MatDialogModule, MatSelectModule, MatButtonModule, ReactiveFormsModule],
   templateUrl: './select-action-dialog.component.html',
   styleUrls: ['./select-action-dialog.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectActionDialogComponent<T> {
   selectControl = new FormControl<T | null>(null, [Validators.required]);
   constructor(
    public dialogRef: MatDialogRef<SelectActionDialogComponent<T>>,
    @Inject(MAT_DIALOG_DATA) public data: SelectActionDialogData<T>
   ) {}

   cancel(): void {
      this.dialogRef.close();
   }
}
