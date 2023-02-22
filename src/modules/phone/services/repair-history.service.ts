import { Injectable } from '@angular/core';
import {
   Firestore, DocumentSnapshot, addDoc, DocumentReference, collection, getDocs, query, where, doc
} from '@firebase/firestore';
import { difference, isEqual } from 'lodash-es';
import { from, Observable, map } from 'rxjs';
import { Repair, RepairHistory } from '../interfaces';
import { AuthService } from '../../../platform/services/auth/auth.service';
import { RepairHistoryConverter } from '../converters/repair-history.converter';
import { Tables } from '../enums';

@Injectable({
   providedIn: 'root'
})
export class RepairHistoryService {
   readonly converter = new RepairHistoryConverter();
   readonly historyCollection = collection(this.firestore, Tables.RepairsHistory).withConverter<RepairHistory>(this.converter);
   constructor(private firestore: Firestore, private authService: AuthService) {
   }

   createHistoryRecord(oldRepair: DocumentSnapshot<Repair>, newRepair: Repair): Observable<DocumentReference<RepairHistory>> {
      return from(addDoc<RepairHistory>(this.historyCollection, this.prepareHistoryRecord(oldRepair, newRepair)));
   }

   getHistory(id: string): Observable<RepairHistory[]> {
      return from(
         getDocs(query(collection(this.firestore, Tables.RepairsHistory),
            where('repairId', '==', doc(this.firestore, `${Tables.Repairs}/${id}`))).withConverter<RepairHistory>(this.converter))
      ).pipe(map(res => res.docs.map(docInfo => docInfo.data()!))) as Observable<RepairHistory[]>;
   }

   private prepareHistoryRecord(oldRepairSnap: DocumentSnapshot<Repair>, newRepair: Repair): RepairHistory {
      return {
         diff: this.getDiff(oldRepairSnap.data()!, newRepair),
         modifiedDate: new Date().getTime(),
         repairId: oldRepairSnap.ref,
         userId: this.authService.user!.userRef
      };
   }

   private getDiff(oldRepair: Repair, newRepair: Repair): string {
      // const oldRepair = {
      //    comments: 'замена платы д Петя 400',
      //    cost: 1000,
      //    createDate: 1676727412101,
      //    customMalfunction: null,
      //    customManufacturer: null,
      //    customModel: 'z00d',
      //    graphPass: [],
      //    id: '1ehryf1XrlgCXmrDkJU6',
      //    imei: null,
      //    malfunctions: [0, 8],
      //    manufacturerId: 4,
      //    modelId: 9514,
      //    pass: null,
      //    phoneNumber: null,
      //    status: 'Done'
      // };
      // _.difference([2, 1], [2, 3]);
      // => [1]
      const deletedKeys = difference(Object.keys(oldRepair), Object.keys(newRepair));

      const newKeys = difference(Object.keys(newRepair), Object.keys(oldRepair));

      const res = Object.keys(oldRepair).reduce((acc, key) => {
         if (!Object.keys(newRepair).includes(key)) {
            return acc;
         }

         if (!isEqual(oldRepair[key], newRepair[key])) {
            return {
               ...acc,
               [key]: {
                  oldValue: oldRepair[key],
                  newValue: newRepair[key]
               }
            };
         }

         return acc;
      }, {
         __deletedKeys: deletedKeys,
         __newKeys: newKeys
      });

      console.log(res);

      return JSON.stringify(res);
   }
}
