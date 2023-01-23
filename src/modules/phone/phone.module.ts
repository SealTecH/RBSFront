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
import { PhoneRootComponent } from './phone-root/phone-root.component';
import { RepairComponent } from './repair/repair.component';
import { PhoneRoutingModule } from './phone-routing.module';
import { PhoneRootService } from './phone-root/phone-root.service';
import { RepairRecordedSnackComponent } from './repair/repair-recored-snack.component';

@NgModule({
   declarations: [
      PhoneRootComponent,
      RepairComponent,
      RepairRecordedSnackComponent
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
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      MatNativeDateModule,
      MatDatepickerModule,
      MatAutocompleteModule
   ]
})
export class PhoneModule {}
