import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
   selector: 'repair-snack',
   template: 'Repair recorded!',
   styles: []
})
export class RepairRecordedSnackComponent {
   snackBarRef = inject(MatSnackBarRef);
}
