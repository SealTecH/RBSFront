import { Injectable } from '@angular/core';
import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import { environment } from '../../../environments/environment';

@Injectable({
   providedIn: 'root'
})
export class FirebaseService {
   constructor() {
      initializeApp(environment.firebase);

      // eslint-disable-next-line no-constructor-return
      return getFirestore();
   }
}
