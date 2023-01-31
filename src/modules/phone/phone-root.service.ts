import { Injectable } from '@angular/core';
import {
   BehaviorSubject, Observable, take, map, of, from, tap
} from 'rxjs';
import {
   Firestore, collectionData, collection, docData, addDoc, deleteDoc, updateDoc
} from '@angular/fire/firestore';
import { doc, DocumentReference } from '@firebase/firestore';
import { ConnectionService } from '../../platform';
import { PhoneBrandTree, PhoneBrand, Malfunction } from '../../platform/connection/phone.interfaces';
import { Unsubscriber } from '../../utils/unsubscriber/unsubscriber';
import { Repair } from './interfaces';
import { Tables } from './enums';
import { RepairConverter } from './converters/repair.converter';

@Injectable({ providedIn: 'root' })
export class PhoneRootService extends Unsubscriber {
   readonly repairsCollection = collection(this.firestore, Tables.Repairs).withConverter<Repair>(new RepairConverter());
   private loadingSource = new BehaviorSubject<boolean>(true);
   readonly loading$: Observable<boolean> = this.loadingSource.pipe();
   private manufacturersSource = new BehaviorSubject<PhoneBrand[]>([]);
   readonly manufacturers$: Observable<PhoneBrand[]> = this.manufacturersSource.pipe();
   private PhoneBrandTreeSource = new BehaviorSubject<PhoneBrandTree>(new Map());
   readonly phoneBrandTree$: Observable<PhoneBrandTree> = this.PhoneBrandTreeSource.pipe();
   private malfunctionsSource = new BehaviorSubject<PhoneBrand[]>([]);
   readonly malfunctions$: Observable<PhoneBrand[]> = this.malfunctionsSource.pipe();
   readonly repairs$: Observable<Repair[]> = this.getAll().pipe(tap(res => console.log(res)));
   isInitialized: boolean = false;
   constructor(private connectionService: ConnectionService,
               private firestore: Firestore) {
      super();
   }

   init(): Observable<[PhoneBrand[], PhoneBrandTree, Malfunction[]]> {
      if (this.isInitialized) {
         return of([this.manufacturersSource.value, this.PhoneBrandTreeSource.value, this.malfunctionsSource.value]);
      }

      this.isInitialized = true;
      this.subs = this.repairs$.pipe(take(1)).subscribe(() => this.loadingSource.next(false));

      return this.connectionService.initPhones().pipe(take(1), map(([brands, tree, malfunctions]) => {
         this.malfunctionsSource.next(malfunctions);
         this.manufacturersSource.next(brands);
         this.PhoneBrandTreeSource.next(tree);

         return [brands, tree, malfunctions];
      }));
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
      return from(deleteDoc(doc(this.firestore, `${Tables.Repairs}/${id}`)));
   }

   getRepairById(id: string): Observable<Repair> {
      return docData(doc(this.firestore, `${Tables.Repairs}/${id}`), { idField: 'id' }) as Observable<Repair>;
   }
}
