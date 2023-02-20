import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Unsubscriber } from '../../../../utils/unsubscriber/unsubscriber';
import { environment } from '../../../../environments/environment';
import { LoginPageService } from './login-page.service';

@Component({
   selector: 'login-page',
   templateUrl: './login-page.component.html',
   styleUrls: ['./login-page.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
   providers: [LoginPageService]
})
export class LoginPageComponent extends Unsubscriber {
   loading$ = this.service.loading$;

   form = new FormGroup({
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', [Validators.required])
   });

   constructor(private service: LoginPageService, private router: Router) {
      super();
   }

   login(): void {
      this.form.updateValueAndValidity();

      if (this.form.valid) {
         this.subs = this.service.login(this.form.value.email!, this.form.value.password!).subscribe((user) => {
            console.log(user);

            if (user) {
               this.router.navigate(['/Phone']);
            }
         });
      }
   }
}
