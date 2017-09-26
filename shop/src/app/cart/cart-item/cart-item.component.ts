import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CartItem } from '../cart-item'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() item: CartItem;
  @Output() changeItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() removeItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  complete(quantity: number){
    this.item.quantity = quantity;
    this.changeItem.emit(this.item);
  }

  remove(item: CartItem){    
    this.removeItem.emit(item);    
  }

}
