import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PhoneRootComponent } from './phone-root/phone-root.component';
import { PhoneRoutes } from './enums';
import { RepairComponent } from './repair/repair.component';

const routes: Routes = [
   {
      path: '',
      component: PhoneRootComponent
   },
   {
      path: PhoneRoutes.Repair,
      component: RepairComponent
   },
   {
      path: '**',
      redirectTo: ''
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PhoneRoutingModule {

}