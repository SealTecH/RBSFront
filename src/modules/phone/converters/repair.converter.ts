import {
   FirestoreDataConverter, SnapshotOptions, WithFieldValue, DocumentData, QueryDocumentSnapshot, DocumentReference
} from '@firebase/firestore';
import { Repair } from '../interfaces';

export class RepairConverter implements FirestoreDataConverter<Repair> {
   private organizationId: DocumentReference;

   setorganizationId(ref: DocumentReference): void {
      this.organizationId = ref;
   }

   fromFirestore(snapshot: QueryDocumentSnapshot<Repair>, options?: SnapshotOptions): Repair {
      const data = snapshot.data(options)!;

      // omit organizationId
      return {
         id: snapshot.id,
         manufacturerId: data.manufacturerId,
         modelId: data.modelId,
         phoneNumber: data.phoneNumber,
         malfunctions: data.malfunctions,
         pass: data.pass,
         graphPass: data.graphPass,
         cost: data.cost,
         imei: data.imei,
         comments: data.comments,
         createDate: data.createDate,
         customManufacturer: data.customManufacturer,
         customModel: data.customModel,
         customMalfunction: data.customMalfunction,
         status: data.status
      };
   }

   toFirestore(modelObject: WithFieldValue<Repair>): DocumentData {
      if (!this.organizationId) {
         console.error('Organization Ref in Firestore RepairConverter is not found. Setup it first before using the converter!');
      }

      return {
         id: modelObject.id,
         manufacturerId: modelObject.manufacturerId,
         modelId: modelObject.modelId,
         malfunctions: modelObject.malfunctions,
         pass: modelObject.pass,
         graphPass: modelObject.graphPass,
         cost: modelObject.cost,
         imei: modelObject.imei,
         phoneNumber: modelObject.phoneNumber,
         comments: modelObject.comments,
         createDate: modelObject.createDate,
         customManufacturer: modelObject.customManufacturer,
         customModel: modelObject.customModel,
         customMalfunction: modelObject.customMalfunction,
         status: modelObject.status,
         organizationId: this.organizationId
      };
   }
}
