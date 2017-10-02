import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { HighlightDirective } from './../directives/highlight.directive';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartService } from '../services/cart/cart.service';
import { CartComponent } from './cart.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CartListComponent, CartItemComponent, HighlightDirective, CartSummaryComponent, CartComponent],
  exports: [
    CartComponent
  ],
  providers: [CartService]
})
export class CartModule { }
