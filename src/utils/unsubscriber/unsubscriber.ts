import { Injectable, OnDestroy } from '@angular/core';
import { SubscriptionLike } from 'rxjs';

@Injectable()
export abstract class Unsubscriber implements OnDestroy {
   private _subs: SubscriptionLike[] = [];

   unsubscribeAll(): void {
      this._subs.forEach(sub => sub && !sub.closed && sub.unsubscribe());
   }

   ngOnDestroy(): void {
      this.unsubscribeAll();
   }

   set subs(subscription: SubscriptionLike) {
      this._subs.push(subscription);
   }
}
