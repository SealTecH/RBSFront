import { Injectable } from '@angular/core';
import {
   BehaviorSubject, Observable, take, map, of
} from 'rxjs';
import { ConnectionService } from '../../platform';
import {
   PhoneBrandTree, PhoneBrand, Malfunction
} from '../../platform/connection/phone.interfaces';
import { Repair } from './interfaces';
import { RepairStatus } from './enums';

const LOCAL_STORAGE_REPAIRS_KEY = 'RepairsRecords';

@Injectable({ providedIn: 'root' })
export class PhoneRootService {
   private loadingSource = new BehaviorSubject<boolean>(false);
   readonly loading$: Observable<boolean> = this.loadingSource.pipe();
   private manufacturersSource = new BehaviorSubject<PhoneBrand[]>([]);
   readonly manufacturers$: Observable<PhoneBrand[]> = this.manufacturersSource.pipe();
   private PhoneBrandTreeSource = new BehaviorSubject<PhoneBrandTree>(new Map());
   readonly phoneBrandTree$: Observable<PhoneBrandTree> = this.PhoneBrandTreeSource.pipe();
   private malfunctionsSource = new BehaviorSubject<PhoneBrand[]>([]);
   readonly malfunctions$: Observable<PhoneBrand[]> = this.malfunctionsSource.pipe();
   private repairsSource = new BehaviorSubject<Repair[]>([]);
   readonly repairs$: Observable<Repair[]> = this.repairsSource.pipe();
   isInitialized: boolean = false;
   constructor(private connectionService: ConnectionService) {
   }

   init(): Observable<[PhoneBrand[], PhoneBrandTree, Malfunction[]]> {
      if (this.isInitialized) {
         return of([this.manufacturersSource.value, this.PhoneBrandTreeSource.value, this.malfunctionsSource.value]);
      }

      this.isInitialized = true;
      this.reloadRepairs();

      return this.connectionService.initPhones().pipe(take(1), map(([brands, tree, malfunctions]) => {
         this.malfunctionsSource.next(malfunctions);
         this.manufacturersSource.next(brands);
         this.PhoneBrandTreeSource.next(tree);

         return [brands, tree, malfunctions];
      }));
   }

   addRepair(repair: Repair): void {
      const records: Repair[] = this.getRepairs();

      records.push(repair);
      this.saveRepairs(records);
   }

   updateRepair(updatedRepair: Repair): Observable<void> {
      const records: Repair[] = this.getRepairs().filter(repair => repair.id !== updatedRepair.id);

      records.push(updatedRepair);
      this.saveRepairs(records);

      return of();
   }

   deleteRepair(id: number): Observable<any> {
      const repairs = this.getRepairs();
      const modifiedRepairs = repairs.splice(this.findRecordIndex(repairs, id), 1);

      this.saveRepairs(modifiedRepairs);

      return of(true);
   }

   changeRepairStatus(id: number, status: RepairStatus): Observable<any> {
      const repairs = this.getRepairs();

     repairs.at(this.findRecordIndex(repairs, id))!.status = status;
     this.saveRepairs(repairs);

     return of(true);
   }

   getRepairById(id: number): Observable<Repair> {
      return of(this.getRepairs().find(repair => repair.id === id)!);
   }

   private getRepairs(): Repair[] {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_REPAIRS_KEY) ?? '[]');
   }

   private saveRepairs(records: Repair[]): void {
      localStorage.setItem(LOCAL_STORAGE_REPAIRS_KEY, JSON.stringify(records));
      this.reloadRepairs();
   }

   private findRecordIndex(records: Repair [], id: number): number {
      return records.findIndex(repair => repair.id === id);
   }

   private reloadRepairs(): void {
      const repairs = this.getRepairs();

      this.repairsSource.next(repairs);
   }
}
