import {
   FirestoreDataConverter, QueryDocumentSnapshot, WithFieldValue, DocumentData
} from '@firebase/firestore';
import { TableUser } from '../../../interfaces';

export class TableUserConverter implements FirestoreDataConverter<TableUser> {
   fromFirestore(snapshot: QueryDocumentSnapshot<TableUser>): TableUser {
      return {
         ...snapshot.data()
      };
   }

   toFirestore(modelObject: WithFieldValue<TableUser>): DocumentData {
      return {
         isSuperuser: modelObject.isSuperuser,
         organizationId: modelObject.organizationId
      };
   }
}
