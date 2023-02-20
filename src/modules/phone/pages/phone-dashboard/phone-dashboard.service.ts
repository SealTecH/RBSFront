import { Injectable } from '@angular/core';
import {
   combineLatest, startWith, map, BehaviorSubject, Observable
} from 'rxjs';
import { FormControl } from '@angular/forms';
import { omit } from 'lodash-es';
import { PhoneRootService } from '../../phone-root.service';
import { RepairStatus } from '../../enums';
import { Repair } from '../../interfaces';
import { Unsubscriber } from '../../../../utils/unsubscriber/unsubscriber';

export interface DashboardRepair extends Repair {
  manufacturer: string | null;
  model: string | null;
  malfunction: string | null;
}

@Injectable()
export class PhoneDashboardService extends Unsubscriber {
   readonly loading$ = this.phoneRootService.loading$;
   private dataSource = new BehaviorSubject<DashboardRepair[]>([]);
   readonly data$ = this.dataSource.pipe();

   constructor(private phoneRootService: PhoneRootService) {
      super();
   }

   init(searchControl: FormControl, hideDoneControl: FormControl): void {
      this.subs = combineLatest([
         searchControl.valueChanges.pipe(startWith('')),
         hideDoneControl.valueChanges.pipe(startWith(hideDoneControl.value)),
         this.phoneRootService.repairs$.pipe(map(repairs => this.normalizeRepairs(repairs)))
      ]).pipe(
         map(([search, hideDone, repairs]): [string| null, DashboardRepair[]] => {
            if (hideDone) {
               return [search, repairs.filter(repair => repair.status !== RepairStatus.Done)];
            }

            return [search, repairs];
         }),
         map(([search, repairs]) => this.searchInRepairs(search, repairs))
      ).subscribe((filteredData) => {
         this.dataSource.next(filteredData);
      });
   }

   duplicateRepair(id: string): void {
      this.phoneRootService.duplicateRepair(id).subscribe();
   }

   deleteRepair(id: string): Observable<Repair[]> {
      return this.phoneRootService.deleteRepair(id);
   }

   updateStatus(repair: DashboardRepair, status: RepairStatus): Observable<Repair[]> {
      return this.phoneRootService.updateRepair({
         ...omit(repair, ['manufacturer', 'model', 'malfunction']),
         status
      });
   }

   private normalizeRepairs(repairs: Repair[]): DashboardRepair[] {
      return repairs.map(repair => ({
         ...repair,
         manufacturer: repair.manufacturerId
            ? this.phoneRootService.manufacturers.find(r => r.id === repair.manufacturerId!)!.name : repair.customManufacturer,
         model: repair.modelId && repair.manufacturerId
            ? this.phoneRootService.phoneBrandTree.get(repair.manufacturerId!)!.find(model => model.id === repair.modelId)!.name
            : repair.customModel,
         malfunction: repair.malfunctions.length
            ? repair.malfunctions.map(malfunction => this.phoneRootService.malfunctions.find(m => malfunction === m.id)!.name)
               .join(', ').concat(repair.customMalfunction ? `, ${repair.customMalfunction}` : '')
            : repair.customMalfunction
      }));
   }

   private searchInRepairs(search: string | null, repairs: DashboardRepair[]): DashboardRepair[] {
      if (!search) {
         return repairs;
      }

      const searchValue = search.toLowerCase().trim();

      return repairs.filter(repair => repair.manufacturer?.toLowerCase().includes(searchValue)
       || repair.model?.toLowerCase().includes(searchValue)
       || repair.malfunction?.toLowerCase().includes(searchValue)
       || repair.comments?.toLowerCase().includes(searchValue)
       || repair.phoneNumber?.toLowerCase().includes(searchValue)
       || repair.imei?.toString().includes(searchValue));
   }
}
