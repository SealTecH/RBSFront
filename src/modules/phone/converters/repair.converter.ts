import { FirestoreDataConverter } from '@firebase/firestore';
import { DocumentData, SnapshotOptions } from '@angular/fire/compat/firestore';
import { WithFieldValue } from '@angular/fire/firestore';
import { Repair } from '../interfaces';

export class RepairConverter implements FirestoreDataConverter<Repair> {
   // TODO change it to QueryDocumentSnapshot<DocumentData>
   fromFirestore(snapshot: any, options?: SnapshotOptions): Repair {
      const data = snapshot.data(options)!;

      return {
         id: data.id,
         manufacturerId: data.manufacturerId,
         modelId: data.modelId,
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
      return {
         id: modelObject.id,
         manufacturerId: modelObject.manufacturerId,
         modelId: modelObject.modelId,
         malfunctions: modelObject.malfunctions,
         pass: modelObject.pass,
         graphPass: modelObject.graphPass,
         cost: modelObject.cost,
         imei: modelObject.imei,
         comments: modelObject.comments,
         createDate: modelObject.createDate,
         customManufacturer: modelObject.customManufacturer,
         customModel: modelObject.customModel,
         customMalfunction: modelObject.customMalfunction,
         status: modelObject.status
      };
   }
}
