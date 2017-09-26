import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CartListComponent, CartItemComponent],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
