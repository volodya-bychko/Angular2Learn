import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CartItem } from '../../models/cart-item'
import { CartTotals } from '../../models/cart-totals'

@Injectable()
export class CartService {
  private items: Array<CartItem>;
  private channel = new Subject<CartTotals>();  
  private totals: CartTotals = new CartTotals();

  public channel$ = this.channel.asObservable();

  constructor() {
    this.items = new Array<CartItem>();
  }

  addCartItem(cartItem: CartItem): CartItem {
    const index = this.items.findIndex(i => i.id === cartItem.id);

    if (index !== -1) {
      this.items[index].quantity += cartItem.quantity;
      this.items[index].totalPrice += cartItem.unitPrice;
    }
    else {
      this.items.push(cartItem);
    }

    this.recalculateTotals();

    return cartItem;
  }

  removeCartItem(cartItem: CartItem): void {
    const index: number = this.items.findIndex(i => i.id === cartItem.id);
    if (index !== -1) {      
      this.items.splice(index, 1);
      this.recalculateTotals();
    }
  }

  updateCartItem(cartItem: CartItem): void {
    const index: number = this.items.findIndex(i => i.id === cartItem.id);
    if (index !== -1) {      
      this.items[index].totalPrice = cartItem.unitPrice * cartItem.quantity;
      this.recalculateTotals();
    }
  }

  getCartItems(): Array<CartItem> {
    return this.items;
  }

  clearCartItems() {
    this.items.splice(0, this.items.length);
    this.recalculateTotals();
  }

  private recalculateTotals() {
    this.totals.totalPrice = 0;
    this.totals.totalQuantity = 0;
    this.items.forEach((item, index) => {
      this.totals.totalQuantity += item.quantity;
      this.totals.totalPrice += item.totalPrice;
    });

    this.channel.next(this.totals);
  }
}