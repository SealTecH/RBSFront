import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { AppCustomerModule, PlatformPages } from '../platform/enums';
import { AuthGuard } from '../platform/pages/auth/auth.guard';

const appRoutes: Routes = [
   {
      path: AppCustomerModule.Phone,
      loadChildren: () => import('../modules/phone/phone.module').then(m => m.PhoneModule),
      canMatch: [AuthGuard]
   },
   {
      path: PlatformPages.Login,
      loadChildren: () => import('../platform/pages/auth/login-page/login-page.module').then(m => m.LoginPageModule)
   },
   {
      path: '',
      redirectTo: environment.module,
      pathMatch: 'prefix'
   },
   {
      path: '**',
      redirectTo: ''
   }
];

@NgModule({
   imports: [RouterModule.forRoot(appRoutes/* , { enableTracing: true } */)],
   exports: [RouterModule]
})
export class AppRoutingModule {

}
