import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import {
   PhoneBrandTree, Malfunction, PhoneDeviceRaw, Manufacturer, PhoneBrandRaw
} from './phone.interfaces';

const ALLOWED_MANUFACTURERS_IDS = [4, 80, 57, 82, 95, 44, 45, 106, 74, 72, 73, 62, 6, 7, 1, 110, 114, 999];

@Injectable({
   providedIn: 'root'
})
export class ConnectionService {
   constructor(private http: HttpClient) {
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
}
