import { AppCustomerModule } from '../platform/enums';
import { EnvironmentConfig } from './enviornment.model';

export const environment: EnvironmentConfig = {
  firebase: {
    projectId: 'rbservice-4a5ca',
    appId: '1:1075764960366:web:cfd2c92d2b661bfd999a7f',
    storageBucket: 'rbservice-4a5ca.appspot.com',
    apiKey: 'AIzaSyBRTym_L4RwqLIMfeh8g0c0mDfr1sT8QMM',
    authDomain: 'rbservice-4a5ca.firebaseapp.com',
    messagingSenderId: '1075764960366',
    measurementId: 'G-2QP4WRWH8K',
  },
   production: true,
   module: AppCustomerModule.Phone
};
