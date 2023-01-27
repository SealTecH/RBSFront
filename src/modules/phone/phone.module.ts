import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { PhoneRootComponent } from './phone-root/phone-root.component';
import { RepairComponent } from './repair/repair.component';
import { PhoneRoutingModule } from './phone-routing.module';
import { PhoneRootService } from './phone-root.service';
import { RepairRecordedSnackComponent } from './snacks/repair-recored-snack.component';
import { RepairDetailsComponent } from './repair-details/repair-details.component';

@NgModule({
   declarations: [
      PhoneRootComponent,
      RepairComponent,
      RepairRecordedSnackComponent,
      RepairDetailsComponent
   ],
   providers: [
      PhoneRootService
   ],
   exports: [
      PhoneRootComponent
   ],
   imports: [
      CommonModule,
      PhoneRoutingModule,
      MatSnackBarModule,
      MatTableModule,
      MatButtonModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      MatNativeDateModule,
      MatDatepickerModule,
      MatAutocompleteModule,
      MatPaginatorModule,
      MatSelectModule,
      MatCardModule
   ]
})
export class PhoneModule {}
