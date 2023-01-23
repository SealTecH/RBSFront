import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
   selector: 'new-repair-snack',
   template: 'New Repair recorded!',
   styles: []
})
export class RepairRecordedSnackComponent {
   snackBarRef = inject(MatSnackBarRef);
}
