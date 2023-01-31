import { AppCustomerModule } from '../platform/enums';

export interface EnvironmentConfig {
  production: boolean;
  module: AppCustomerModule,
  firebase: {
    apiKey: string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string,
    measurementId: string
  }
}
