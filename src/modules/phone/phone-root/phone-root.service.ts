import { Injectable } from '@angular/core';
import {
   BehaviorSubject, Observable, take, map, of
} from 'rxjs';
import { ConnectionService } from '../../../platform';
import {
   PhoneBrandTree, PhoneBrand, Repair, Malfunction
} from '../../../platform/connection/phone.interfaces';

const LOCAL_STORAGE_REPAIRS_KEY = 'RepairsRecords';

@Injectable({ providedIn: 'root' })
export class PhoneRootService {
   private loadingSource = new BehaviorSubject<boolean>(false);
   readonly loading$: Observable<boolean> = this.loadingSource.pipe();
   private phoneBrandsSource = new BehaviorSubject<PhoneBrand[]>([]);
   readonly phoneBrands$: Observable<PhoneBrand[]> = this.phoneBrandsSource.pipe();
   private PhoneBrandTreeSource = new BehaviorSubject<PhoneBrandTree>(new Map());
   readonly phoneBrandTree$: Observable<PhoneBrandTree> = this.PhoneBrandTreeSource.pipe();
   private malfunctionsSource = new BehaviorSubject<PhoneBrand[]>([]);
   readonly malfunctions$: Observable<PhoneBrand[]> = this.malfunctionsSource.pipe();

   isInitialized: boolean = false;
   constructor(private connectionService: ConnectionService) {
   }

   init(): Observable<[PhoneBrand[], PhoneBrandTree, Malfunction[]]> {
      if (this.isInitialized) {
         return of([this.phoneBrandsSource.value, this.PhoneBrandTreeSource.value, this.malfunctionsSource.value]);
      }

      this.isInitialized = true;

      return this.connectionService.initPhones().pipe(take(1), map(([brands, tree, malfunctions]) => {
         this.malfunctionsSource.next(malfunctions);
         this.phoneBrandsSource.next(brands);
         this.PhoneBrandTreeSource.next(tree);

         return [brands, tree, malfunctions];
      }));
   }

   saveRepair(repair: Repair): void {
      const records: Repair[] = this.getRepairs();

      records.push(repair);
      localStorage.setItem(LOCAL_STORAGE_REPAIRS_KEY, JSON.stringify(records));
   }

   getRepairs(): Repair[] {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_REPAIRS_KEY) ?? '[]');
   }
}
