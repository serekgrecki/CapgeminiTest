import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable()
export class SubscriptionManagerService implements OnDestroy {
  private _subscription: Subscription;

  constructor() {
    this._subscription = new Subscription();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  public add(subscription: Subscription) {
    this._subscription.add(subscription);
  }

  public unsubscribeAll() {
    this._subscription.unsubscribe();
  }
}
