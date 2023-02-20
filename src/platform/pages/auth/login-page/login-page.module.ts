import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page.component';

@NgModule({
   imports: [RouterModule.forChild([
      {
         path: '',
         component: LoginPageComponent
      },
      {
         path: '**',
         redirectTo: ''
      }
   ])],
   exports: [RouterModule]
})
class LoginRoutingModule {

}

@NgModule({
   declarations: [
      LoginPageComponent
   ],
   imports: [
      LoginRoutingModule,
      CommonModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      ReactiveFormsModule,
      MatProgressSpinnerModule
   ]
})
export class LoginPageModule { }
