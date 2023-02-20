import { Injectable } from '@angular/core';
import {
   BehaviorSubject, Observable, take, map, tap, shareReplay, switchMap, finalize
} from 'rxjs';
import { sortBy } from 'lodash-es';
import { Unsubscriber } from '../../utils/unsubscriber/unsubscriber';
import {
   Repair, PhoneBrandTree, Malfunction, Manufacturer
} from './interfaces';
import { RepairStatus } from './enums';
import { PhoneConnectionService } from './phone-connection.service';

@Injectable({ providedIn: 'root' })
export class PhoneRootService extends Unsubscriber {
   private loadingSource = new BehaviorSubject<boolean>(true);
   readonly loading$: Observable<boolean> = this.loadingSource.pipe();

   private _manufacturers: Manufacturer[] = [];
   private _phoneBrandTree: PhoneBrandTree;
   private _malfunctions: Malfunction[] = [];
   private readonly repairsSource = new BehaviorSubject<Repair[]>([]);
   readonly repairs$: Observable<Repair[]> = this.repairsSource.pipe();

   private initSource = new BehaviorSubject<boolean>(false);
   readonly isInitialized$ = this.initSource.pipe();

   constructor(private connectionService: PhoneConnectionService) {
      super();

      this.subs = this.connectionService.initPhones().pipe(
         take(1),
         tap(([manufacturers, tree, malfunctions]) => {
            this._malfunctions = malfunctions;
            this._manufacturers = manufacturers;
            this._phoneBrandTree = tree;
         }),
         switchMap(() => this.getRepairs())
      ).subscribe((repairs) => {
         this.repairsSource.next(repairs);
         this.initSource.next(true);
         this.loadingSource.next(false);
      });
   }

   get manufacturers(): Manufacturer[] {
      return this._manufacturers;
   }

   get phoneBrandTree(): PhoneBrandTree {
      return this._phoneBrandTree;
   }

   get malfunctions(): Malfunction[] {
      return this._malfunctions;
   }

   getRepairs(): Observable<Repair[]> {
      return this.connectionService.getAllRepairs().pipe(
         map(repairs => sortBy(repairs, 'createDate').reverse()),
         tap(res => console.log(res))
      );
   }

   createRepair(repair: Repair): Observable<Repair[]> {
      this.loadingSource.next(true);

      return this.connectionService.createRepair(repair)
         .pipe(
            switchMap(() => this.getRepairs().pipe(tap(repairs => this.repairsSource.next(repairs)))),
            finalize(() => this.loadingSource.next(false))
         );
   }

   updateRepair(repair: Repair): Observable<Repair[]> {
      this.loadingSource.next(true);

      return this.connectionService.updateRepair(repair)
         .pipe(
            switchMap(() => this.getRepairs().pipe(tap(repairs => this.repairsSource.next(repairs)))),
            finalize(() => this.loadingSource.next(false))
         );
   }

   deleteRepair(id: string): Observable<Repair[]> {
      this.loadingSource.next(true);

      return this.connectionService.deleteRepair(id).pipe(
         switchMap(() => this.getRepairs().pipe(tap(repairs => this.repairsSource.next(repairs)))),
         finalize(() => this.loadingSource.next(false))
      );
   }

   getRepairById(id: string): Observable<Repair> {
      this.loadingSource.next(true);

      return this.connectionService.getRepair(id).pipe(finalize(() => this.loadingSource.next(false)));
   }

   duplicateRepair(repairId: string): Observable<string> {
      this.loadingSource.next(true);

      return this.repairs$.pipe(
         take(1),
         switchMap((repairs) => {
            const repairToCopy: Repair = {
               ...repairs.find(({ id }) => id === repairId)!,
               createDate: new Date().getTime(),
               status: RepairStatus.WaitingRepair,
               id: ''
            };

            return this.connectionService.createRepair(repairToCopy);
         })
      );
   }
}
