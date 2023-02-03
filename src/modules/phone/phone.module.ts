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
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PhoneDashboardComponent } from './pages/phone-dashboard/phone-dashboard.component';
import { RepairComponent } from './pages/repair/repair.component';
import { PhoneRoutingModule } from './phone-routing.module';
import { PhoneRootService } from './phone-root.service';
import { RepairRecordedSnackComponent } from './components/snacks/repair-recored-snack.component';
import { RepairDetailsComponent } from './pages/repair-details/repair-details.component';
import { GraphPassComponent } from './components/graph-pass/graph-pass.component';
import { EditGraphPassDialogComponent } from './dialogs/edit-graph-pass-dialog/edit-graph-pass-dialog.component';

@NgModule({
   declarations: [
      PhoneDashboardComponent,
      RepairComponent,
      RepairRecordedSnackComponent,
      RepairDetailsComponent,
      GraphPassComponent,
      EditGraphPassDialogComponent
   ],
   providers: [
      PhoneRootService
   ],
   exports: [
      PhoneDashboardComponent
   ],
   imports: [
      AngularFirestoreModule,
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
      MatCardModule,
      MatCheckboxModule,
      MatSlideToggleModule
   ]
})
export class PhoneModule {}
