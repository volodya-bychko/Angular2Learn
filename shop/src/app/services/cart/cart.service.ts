import { Injectable } from '@angular/core';
import { CartItem } from '../../models/cart-item'  

@Injectable()
export class CartService {
  private items: Array<CartItem>;

  constructor() {
    this.items = new Array<CartItem>();
  }

  addCartItem(cartItem: CartItem): CartItem {
    var item = this.items.find(i => i.id == cartItem.id);

    if (item != null) {
      item.quantity += cartItem.quantity;
      item.totalPrice += cartItem.unitPrice;
    }
    else {
      this.items.push(cartItem);
    }

    return cartItem;
  }

  removeCartItem(cartItem: CartItem): void {
    var item = this.items.find(i => i.id == cartItem.id);
    const index: number = this.items.indexOf(item);
    if (index !== -1) {
        this.items.splice(index, 1);
    }
  }

  updateCartItem(cartItem: CartItem): void {
    var item = this.items.find(i => i.id == cartItem.id);
    const index: number = this.items.indexOf(item);
    if (index !== -1) {
      this.items[index].totalPrice = cartItem.unitPrice * cartItem.quantity;
    }
  }

  getCartItems(): Array<CartItem> {    
    return this.items;
  }
}