import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CartItem } from '../../models/cart-item'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() item: CartItem;
  @Output() editItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() removeItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() closeItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  edit(quantity: number){
    this.item.quantity = quantity;
    this.editItem.emit(this.item);
  }

  remove(item: CartItem){    
    this.removeItem.emit(item);    
  }

  close(item: CartItem){    
    this.closeItem.emit(item);    
  }

}
