import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import {
   PhoneBrandTree, Malfunction, PhoneDeviceRaw, PhoneBrand, PhoneBrandRaw
} from './phone.interfaces';

const ALLOWED_MANUFACTURERS_IDS = [4, 80, 57, 82, 95, 44, 45, 106, 74, 72, 62, 6, 7, 1];

@Injectable({
   providedIn: 'root'
})
export class ConnectionService {
   constructor(private http: HttpClient) {
   }

   initPhones(): Observable<[PhoneBrand[], PhoneBrandTree, Malfunction[]]> {
      return forkJoin([
         this.http.get<{RECORDS: PhoneBrandRaw[]}>('./assets/brands.json'),
         this.http.get<PhoneBrandRaw[]>('./assets/devices.light.json'),
         this.http.get<Malfunction[]>('./assets/malfunctions.json')
      ]).pipe(
         map(([{ RECORDS: brands }, devices, malfunctions]:
                [{RECORDS: PhoneBrandRaw[]}, PhoneDeviceRaw[], Malfunction[]]) => {
            const outputTree: PhoneBrandTree = new Map();

            const outputBrands: PhoneBrand[] = brands
            // TODO remove cutting off
               .filter(brand => ALLOWED_MANUFACTURERS_IDS.includes(Number(brand.id)))
               .map((brand) => {
                  outputTree.set(
                     Number(brand.id),
                     devices.filter(device => device.brandId === brand.id)
                        .reverse()
                        .map(device => ({ ...device, id: Number(device.id), brandId: Number(device.brandId) }))
                  );

                  return { id: Number(brand.id), name: brand.name };
               });

            return [outputBrands, outputTree, malfunctions];
         })
      );
   }
}
