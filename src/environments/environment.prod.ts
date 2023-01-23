import { AppCustomerModule } from '../platform/enums';
import { EnvironmentConfig } from './enviornment.model';

export const environment: EnvironmentConfig = {
   production: true,
   module: AppCustomerModule.Phone
};
