import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProductsService } from '../../services/product/products.service'
import { CartService } from '../../services/cart/cart.service'
import { CartItem } from '../../models/cart-item'
import { Product } from '../../models/product'
import { CarCategory } from '../../models/car-category';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  providers: [CartService]
})

export class CartListComponent implements OnInit, OnDestroy {
  sub: Subscription;
  private items: Array<CartItem>;
  private selectedItem: CartItem;

  constructor(private productsService: ProductsService,
              private cartService: CartService) {    
    this.items = new Array<CartItem>();
  }

  ngOnInit() {
    this.sub = this.productsService.channel$.subscribe(
      product => this.cartService.addCartItem(this.createCartItem(product)));    
    
    this.items = this.cartService.getCartItems();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  createCartItem(product: Product): CartItem{
      const item = new CartItem();
      item.name = product.name;
      item.description = product.description;
      item.id = product.id;
      item.quantity = 1;
      item.unitPrice = product.price;
      item.totalPrice = product.price;
      item.category = CarCategory[product.category];

      return item;
  }

  selectItem(inputItem: CartItem){
    this.selectedItem = inputItem;
  }

  onEditComplete(item: CartItem) {    
    this.cartService.updateCartItem(item);    
    this.items = this.cartService.getCartItems();
  }

  onRemoveComplete(item: CartItem) {
    this.selectedItem = null;    
    this.cartService.removeCartItem(item);
  }

  onCloseComplete(item: CartItem) {
    this.selectedItem = null;
  }

}
