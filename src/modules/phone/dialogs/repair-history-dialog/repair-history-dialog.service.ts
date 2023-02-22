import { Injectable } from '@angular/core';
import {
   BehaviorSubject, take, finalize
} from 'rxjs';
import { omit } from 'lodash-es';
import { RepairHistoryService } from '../../services/repair-history.service';
import { Unsubscriber } from '../../../../utils/unsubscriber/unsubscriber';
import { RepairHistory, HistoryDiff, Repair } from '../../interfaces';
import { PhoneRootService } from '../../services/phone-root.service';
import { HistoryOperationKeys } from '../../enums';
import { toDateString } from '../../../../platform/utils/functions';

export interface TableRepairHistory {
  modifiedDate: string
  user: string
  diff: { [K in keyof Partial<Repair>]: { oldValue: string, newValue: string }}
}
@Injectable()
export class RepairHistoryDialogService extends Unsubscriber {
   private readonly loadingSource = new BehaviorSubject<boolean>(false);
   readonly loading$ = this.loadingSource.pipe();
   private readonly dataSource = new BehaviorSubject<TableRepairHistory[]>([]);
   readonly data$ = this.dataSource.pipe();
   // imply phoneRootService is initialized
   constructor(private repairHistoryService: RepairHistoryService, private phoneRootService: PhoneRootService) {
      super();
   }

   getTitle(repair: Repair): string {
      const manufacturer = repair.manufacturerId
         ? this.phoneRootService.manufacturers.find(r => r.id === repair.manufacturerId!)!.name : repair.customManufacturer;
      const modelStr = repair.modelId && repair.manufacturerId
         ? this.phoneRootService.phoneBrandTree.get(repair.manufacturerId!)!.find(model => model.id === repair.modelId)!.name
         : repair.customModel;

      return `History of ${manufacturer} - ${modelStr}`;
   }

   getHistory(id: string): void {
      this.loadingSource.next(true);
      this.subs = this.repairHistoryService.getHistory(id).pipe(
         take(1),
         finalize(() => this.loadingSource.next(false))
      ).subscribe((history) => {
         this.dataSource.next(history.map(record => this.normalizeHistory(record)));
      });
   }

   private normalizeHistory(history: RepairHistory): TableRepairHistory {
      const diff: HistoryDiff = JSON.parse(history.diff);
      const parsedDiff: { [K in keyof Partial<Repair>]: { oldValue: string, newValue: string }} = Object.keys(
         omit(diff, Object.keys(HistoryOperationKeys))
      ).reduce((acc, key: keyof Repair) => ({
         ...acc,
         [key]: {
            oldValue: this.processDiffValue(key, diff[key]!.oldValue, diff),
            newValue: this.processDiffValue(key, diff[key]!.newValue, diff)
         }
      }), {} as { [K in keyof Partial<Repair>]: { oldValue: string, newValue: string }});

      return {
         modifiedDate: toDateString(history.modifiedDate),
         // todo make it a normal name
         user: history.userId.id,
         diff: parsedDiff
         // todo: support removed and added keys
      };
   }

   private processDiffValue(key: keyof Repair, value: string | number | number[] | null, diffObj: HistoryDiff): string {
      const defaultReturn = 'not set';

      if (!value) {
         return defaultReturn;
      }

      switch (key) {
      case 'manufacturerId':
         return this.phoneRootService.manufacturers.find(m => m.id === value)!.name;
      case 'modelId':
         // eslint-disable-next-line no-case-declarations
         const manufacturerId = diffObj.manufacturerId!.newValue;

         if (manufacturerId) {
            const tree = this.phoneRootService.phoneBrandTree.get(manufacturerId);

            return manufacturerId && tree ? tree.find(device => device.id === value)!.name : defaultReturn;
         }

         return defaultReturn;
      case 'malfunctions':
         return (value as number[]).map(malfunction => this.phoneRootService.malfunctions.find(m => m.id === malfunction)!.name).join(', ');
      default: return typeof value === 'string' ? value : value.toString();
      }
   }
}
