import { Injectable } from '@angular/core';
import {
   Observable, from, catchError, of, map, BehaviorSubject
} from 'rxjs';
import {
   User,
   Auth,
   sendPasswordResetEmail,
   UserCredential,
   getAuth,
   signInWithEmailAndPassword,
   signOut
} from '@firebase/auth';
import {
   Firestore, doc, getDoc, DocumentReference
} from '@firebase/firestore';
import { PlatformTables } from '../../enums';
import { AppUser, TableUser } from '../../interfaces';
import { Unsubscriber } from '../../../utils/unsubscriber/unsubscriber';
import { TableUserConverter } from '../firebase/converters/table-user.converter';

@Injectable({
   providedIn: 'root'
})
export class AuthService extends Unsubscriber {
   private readonly serviceInitSource = new BehaviorSubject<boolean>(false);
   readonly serviceInit$ = this.serviceInitSource.pipe();
   private readonly userDataSource = new BehaviorSubject<AppUser | null>(null);
   readonly user$ = this.userDataSource.pipe();
   private readonly auth: Auth;
   constructor(private firestore: Firestore) {
      super();
      this.auth = getAuth();
      this.userDataSource.next(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null);
      this.auth.onAuthStateChanged((user) => {
         console.log('auth changed', user);

         if (user) {
            this.subs = this.setUserData(user).subscribe((appUser) => {
               this.userDataSource.next(appUser);
               localStorage.setItem('user', JSON.stringify(this.userDataSource.value));
               this.serviceInitSource.next(true);
            });
         } else {
            localStorage.setItem('user', 'null');
            this.userDataSource.next(null);
            this.serviceInitSource.next(true);
         }
      });
      // https://dev.to/jdgamble555/angular-12-with-firebase-9-49a0
   }

   signIn(email: string, password: string): Observable<UserCredential | null> {
      return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
         catchError((err) => {
            console.log(err);

            return of(null);
         })
      );
   }

   forgotPassword(passwordResetEmail: string): Observable<void> {
      return from(sendPasswordResetEmail(this.auth, passwordResetEmail));
   }

   get user(): AppUser | null {
      return this.userDataSource.value;
   }

   signOut(): Observable<void> {
      return from(signOut(this.auth).then(() => {
         localStorage.removeItem('user');
      }));
   }

   private setUserData(user: User): Observable<AppUser> {
      const document: DocumentReference<TableUser> = doc(this.firestore, `${PlatformTables.Users}/${user.uid}`)
         .withConverter<TableUser>(new TableUserConverter());

      return from(getDoc(document))
         .pipe(
            map((res => ({
               ...user,
               organizationId: res.data()!.organizationId,
               isSuperuser: res.data()!.isSuperuser,
               userRef: document
            })))
         );
   }
}
