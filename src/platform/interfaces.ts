import { FormControl, FormArray, AbstractControl } from '@angular/forms';

export interface SelectOptionInterface<T> {
  label: string;
  value: T;
}

export type FormEntity<T> = {
  [K in keyof T]: FormControl<T[K]> | FormArray<AbstractControl<T[K]>>
}
