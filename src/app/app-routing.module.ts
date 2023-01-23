import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { AppCustomerModule } from '../platform/enums';

const appRoutes: Routes = [
   {
      path: '',
      redirectTo: environment.module
   },
   {
      path: AppCustomerModule.Phone,
      loadChildren: () => import('../modules/phone/phone.module').then(m => m.PhoneModule)
   },
   {
      path: '**',
      redirectTo: ''
   }
];

@NgModule({
   imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
   exports: [RouterModule]
})
export class AppRoutingModule {

}
