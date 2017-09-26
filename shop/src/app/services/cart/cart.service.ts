import { Injectable } from '@angular/core';
import { CartItem } from '../../cart/cart-item'  

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
      item.price += cartItem.price;
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
    var price = item.price / item.quantity;    
    const index: number = this.items.indexOf(item);
    if (index !== -1) {
      cartItem.price = price * cartItem.quantity;
      this.items[index] = cartItem;      
    }
  }

  getCartItems(): Array<CartItem> {    
    return this.items;
  }
}