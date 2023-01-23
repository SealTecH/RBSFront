import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PhoneRoutes } from '../enums';
import { Unsubscriber } from '../../../utils/unsubscriber/unsubscriber';
import {
   Repair, PhoneBrand, PhoneBrandTree, Malfunction
} from '../../../platform/connection/phone.interfaces';
import { PhoneRootService } from './phone-root.service';

@Component({
   selector: 'phone-root',
   templateUrl: './phone-root.component.html',
   styleUrls: ['./phone-root.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhoneRootComponent extends Unsubscriber implements OnInit {
   readonly columns = ['manufacturer', 'model', 'malfunction', 'cost', 'created', 'comments', 'status'];
   loading$ = this.service.loading$;
   readonly manufacturers$ = this.service.manufacturers$;
   readonly phoneBrandTree$ = this.service.phoneBrandTree$;
   readonly malfunctions$ = this.service.malfunctions$;
   repairs$ = new BehaviorSubject<Repair[]>([]);
   constructor(private router: Router, private service: PhoneRootService) {
      super();
   }

   ngOnInit(): void {
      this.subs = this.service.init().subscribe();
      this.repairs$.next(this.service.getRepairs());
   }

   newRepairClick(): void {
      this.router.navigate([PhoneRoutes.Repair]);
   }

   getManufacturer(brands: PhoneBrand[], id: number): string | undefined {
      return brands.find(brand => brand.id === id)?.name;
   }

   getModel(tree: PhoneBrandTree, brandId: number, id: number): string | undefined {
      return tree.get(brandId)?.find(device => device.id === id)?.name;
   }

   getMalfunction(malfunctionsSource: Malfunction[], ids: number[]): string {
      return ids.map(id => malfunctionsSource.find(malfunction => malfunction.id === id)?.name).join(',');
   }

   getDate(date: number): string {
      return new Date(date).toDateString();
   }
}
