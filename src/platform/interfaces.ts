import { FormControl, FormArray, AbstractControl } from '@angular/forms';
import { User } from '@firebase/auth';
import { DocumentReference } from '@firebase/firestore';

export interface SelectOptionInterface<T> {
  label: string;
  value: T;
}

export type FormEntity<T> = {
  [K in keyof T]: FormControl<T[K]> | FormArray<AbstractControl<T[K]>>
}

export interface Organization {
  id: string;
  name: string;
}
export interface TableUser {
  isSuperuser: boolean;
  organizationId: DocumentReference<Organization>
}
export interface AppUser extends User, TableUser {
  userRef: DocumentReference<TableUser>
}
