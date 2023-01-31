// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AppCustomerModule } from '../platform/enums';
import { EnvironmentConfig } from './enviornment.model';

export const environment: EnvironmentConfig = {
   production: false,
   module: AppCustomerModule.Phone,
   firebase: {
      projectId: 'rbservice-4a5ca',
      appId: '1:1075764960366:web:cfd2c92d2b661bfd999a7f',
      storageBucket: 'rbservice-4a5ca.appspot.com',
      apiKey: 'AIzaSyBRTym_L4RwqLIMfeh8g0c0mDfr1sT8QMM',
      authDomain: 'rbservice-4a5ca.firebaseapp.com',
      messagingSenderId: '1075764960366',
      measurementId: 'G-2QP4WRWH8K',
   }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
