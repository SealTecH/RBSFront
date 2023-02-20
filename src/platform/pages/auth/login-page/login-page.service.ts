import { Injectable } from '@angular/core';
import {
   BehaviorSubject, finalize, Observable
} from 'rxjs';
import { UserCredential } from '@firebase/auth';
import { AuthService } from '../../../services/auth/auth.service';
import { Unsubscriber } from '../../../../utils/unsubscriber/unsubscriber';

@Injectable()
export class LoginPageService extends Unsubscriber {
   private loadingSource = new BehaviorSubject<boolean>(false);
   readonly loading$ = this.loadingSource.pipe();
   constructor(private authService: AuthService) {
      super();
   }

   login(email: string, password: string): Observable<UserCredential | null> {
      this.loadingSource.next(true);

      return this.authService.signIn(email, password).pipe(
         finalize(() => this.loadingSource.next(false))
      );
   }
}
