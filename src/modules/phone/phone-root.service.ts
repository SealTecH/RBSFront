import { Injectable } from '@angular/core';
import {
   BehaviorSubject, Observable, take, map, from, tap, shareReplay, switchMap
} from 'rxjs';
import {
   Firestore, collectionData, collection, docData, addDoc, deleteDoc, updateDoc
} from '@angular/fire/firestore';
import { doc, DocumentReference } from '@firebase/firestore';
import { sortBy } from 'lodash-es';
import { ConnectionService } from '../../platform';
import { PhoneBrandTree, Manufacturer, Malfunction } from '../../platform/connection/phone.interfaces';
import { Unsubscriber } from '../../utils/unsubscriber/unsubscriber';
import { Repair } from './interfaces';
import { Tables, RepairStatus } from './enums';
import { RepairConverter } from './converters/repairConverter';

@Injectable({ providedIn: 'root' })
export class PhoneRootService extends Unsubscriber {
   readonly repairsCollection = collection(this.firestore, Tables.Repairs).withConverter<Repair>(new RepairConverter());
   private loadingSource = new BehaviorSubject<boolean>(true);
   readonly loading$: Observable<boolean> = this.loadingSource.pipe();

   private _manufacturers: Manufacturer[] = [];
   private _phoneBrandTree: PhoneBrandTree;
   private _malfunctions: Malfunction[] = [];

   readonly repairs$: Observable<Repair[]> = this.getAll().pipe(
      map(repairs => sortBy(repairs, 'createDate').reverse()),
      shareReplay(1),
      tap(res => console.log(res))
   );

   private initSource = new BehaviorSubject<boolean>(false);
   readonly isInitialized$ = this.initSource.pipe();

   constructor(private connectionService: ConnectionService,
               private firestore: Firestore) {
      super();

      this.subs = this.connectionService.initPhones().pipe(
         take(1),
         tap(([manufacturers, tree, malfunctions]) => {
            this._malfunctions = malfunctions;
            this._manufacturers = manufacturers;
            this._phoneBrandTree = tree;
         }),
         switchMap(() => this.repairs$.pipe(take(1)))
      ).subscribe(() => {
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

   getAll(): Observable<Repair[]> {
      return collectionData(this.repairsCollection, {
         idField: 'id'
      }) as Observable<Repair[]>;
   }

   createRepair(repair: Repair): Observable<DocumentReference<Repair>> {
      this.loadingSource.next(true);

      return from(addDoc<Repair>(this.repairsCollection, repair))
         .pipe(tap(() => this.loadingSource.next(false)));
   }

   updateRepair(repair: Repair): Observable<void> {
      this.loadingSource.next(true);

      return from(updateDoc(doc(this.firestore, `${Tables.Repairs}/${repair.id}`), { ...repair }))
         .pipe(tap(() => this.loadingSource.next(false)));
   }

   deleteRepair(id: string): Observable<void> {
      return from(deleteDoc(doc(this.firestore, `${Tables.Repairs}/${id}`))).pipe(tap(() => this.loadingSource.next(false)));
   }

   getRepairById(id: string): Observable<Repair> {
      return docData(doc(this.firestore, `${Tables.Repairs}/${id}`), { idField: 'id' }) as Observable<Repair>;
   }

   duplicateRepair(repairId: string): Observable<DocumentReference<Repair>> {
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

            return this.createRepair(repairToCopy);
         })
      );
   }
}
