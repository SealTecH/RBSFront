import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PhoneDashboardComponent } from './pages/phone-dashboard/phone-dashboard.component';
import { PhoneRoutes } from './enums';
import { RepairComponent } from './pages/repair/repair.component';
import { RepairDetailsComponent } from './pages/repair-details/repair-details.component';

const routes: Routes = [
   {
      path: '',
      component: PhoneDashboardComponent
   },
   {
      path: PhoneRoutes.Repair,
      component: RepairComponent
   },
   {
      path: `${PhoneRoutes.Repair}/:id`,
      component: RepairDetailsComponent
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
