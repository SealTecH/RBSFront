import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
   Observable, forkJoin, map, from, filter
} from 'rxjs';
import {
   Firestore,
   getDocs,
   query,
   collection,
   where,
   addDoc,
   updateDoc,
   doc,
   deleteDoc,
   getDoc
} from '@firebase/firestore';
import { Unsubscriber } from '../../utils/unsubscriber/unsubscriber';
import { AuthService } from '../../platform/services/auth/auth.service';
import {
   PhoneBrandTree, Malfunction, PhoneDeviceRaw, Manufacturer, PhoneBrandRaw, Repair
} from './interfaces';
import { Tables } from './enums';
import { RepairConverter } from './converters/repairConverter';

const ALLOWED_MANUFACTURERS_IDS = [4, 80, 57, 82, 95, 44, 45, 106, 74, 72, 73, 62, 6, 7, 1, 110, 114, 999];

@Injectable({
   providedIn: 'root'
})
export class PhoneConnectionService extends Unsubscriber {
   readonly converter = new RepairConverter();
   readonly repairsCollection = collection(this.firestore, Tables.Repairs).withConverter<Repair>(this.converter);
   constructor(private http: HttpClient,
               private firestore: Firestore,
               private authService: AuthService) {
      super();

      this.subs = this.authService.user$.pipe(filter(user => !!user)).subscribe((user) => {
         this.converter.setorganizationId(user!.organizationId);
      });
   }

   initPhones(): Observable<[Manufacturer[], PhoneBrandTree, Malfunction[]]> {
      return forkJoin([
         this.http.get<{RECORDS: PhoneBrandRaw[]}>('./assets/brands.json'),
         this.http.get<PhoneDeviceRaw[]>('./assets/devices.onlyNeededBrands.2012.json'),
         this.http.get<Malfunction[]>('./assets/malfunctions.json'),
         this.http.get<PhoneDeviceRaw[]>('./assets/iphone.json')
      ]).pipe(
         map(([{ RECORDS: brands }, devices, malfunctions, iPhones]:
             [{RECORDS: PhoneBrandRaw[]}, PhoneDeviceRaw[], Malfunction[], PhoneDeviceRaw[]]) => {
            const outputTree: PhoneBrandTree = new Map();

            const outputBrands: Manufacturer[] = brands
          // TODO remove cutting off
               .filter(brand => ALLOWED_MANUFACTURERS_IDS.includes(Number(brand.id)))
               .map((brand) => {
                  const brandId = Number(brand.id);
                  const devicesList = devices.filter(device => device.brandId === brandId)
                     .reverse().map(device => ({ ...device, id: device.id, brandId }));

                  if (devicesList.length) {
                     outputTree.set(
                        brandId,
                        devicesList
                     );
                  }

                  return { id: Number(brand.id), name: brand.name };
               }) as Manufacturer[];

            // add iphones
            outputTree.set(999, iPhones.reverse());

            return [outputBrands, outputTree, malfunctions];
         })
      );
   }

   getAllRepairs(): Observable<Repair[]> {
      return from(
         getDocs(query(collection(this.firestore, Tables.Repairs),
            where('organizationId', '==', this.authService.user!.organizationId)).withConverter<Repair>(this.converter))
      ).pipe(map(res => res.docs.map(docInfo => docInfo.data()!))) as Observable<Repair[]>;
   }

   createRepair(repair: Repair): Observable<string> {
      return from(addDoc<Repair>(this.repairsCollection, repair)).pipe(map(res => res.id));
   }

   updateRepair(repair: Repair): Observable<void> {
      return from(updateDoc(doc(this.firestore, `${Tables.Repairs}/${repair.id}`), { ...repair }));
   }

   deleteRepair(id: string): Observable<void> {
      return from(deleteDoc(doc(this.firestore, `${Tables.Repairs}/${id}`)));
   }

   getRepair(id: string): Observable<Repair> {
      return from(
         getDoc<Repair>(doc(this.firestore, `${Tables.Repairs}/${id}`).withConverter<Repair>(new RepairConverter()))
      ).pipe(map(docRes => docRes.data()!));
   }
}
