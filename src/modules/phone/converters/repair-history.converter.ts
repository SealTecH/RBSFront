import {
   FirestoreDataConverter,
   SnapshotOptions,
   WithFieldValue,
   DocumentData,
   QueryDocumentSnapshot
} from '@firebase/firestore';
import { RepairHistory } from '../interfaces';

export class RepairHistoryConverter implements FirestoreDataConverter<RepairHistory> {
   fromFirestore(snapshot: QueryDocumentSnapshot<RepairHistory>, options?: SnapshotOptions): RepairHistory {
      const data = snapshot.data(options)!;

      // omit organizationId
      return {
         diff: data.diff,
         modifiedDate: data.modifiedDate,
         repairId: data.repairId,
         userId: data.userId
      };
   }

   toFirestore(modelObject: WithFieldValue<RepairHistory>): DocumentData {
      return {
         diff: modelObject.diff,
         modifiedDate: modelObject.modifiedDate,
         repairId: modelObject.repairId,
         userId: modelObject.userId
      };
   }
}
