import { OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

export class BaseComponent implements OnDestroy, OnInit {

  protected subscriptions: Array<Subscription> = [];

  constructor() {
  }

  getCart() {
    // return this.cartService.getCart();
  }

  async getCartAsync() {
    // return await this.cartService.getCartPromise();
  }

  isLoggedIn() {
    // return this.getUserModel() && this.getUserModel().type !== 'GUEST';
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      if (subscription) {
        try {
          subscription.unsubscribe();
        } catch (e) {
          console.error('unsubscribe error', e);
        }
      }
    });
  }

  ngOnInit() {}
}
