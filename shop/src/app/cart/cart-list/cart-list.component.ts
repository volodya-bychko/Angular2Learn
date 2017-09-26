import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProductsService } from '../../products.service'
import { CartService } from '../../services/cart/cart.service'
import { CartItem } from '../cart-item'
import { Product } from '../../product'
import { CarCategory } from '../../car-category';

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
      var item = new CartItem();
      item.name = product.name;
      item.description = product.description;
      item.id = product.id;
      item.quantity = 1;
      item.price = product.price;
      item.category = CarCategory[product.category];

      return item;
  }

  selectItem(inputItem: CartItem){
    var item = new CartItem();
    item.name = inputItem.name;
    item.description = inputItem.description;
    item.id = inputItem.id;
    item.quantity = inputItem.quantity;
    item.price = inputItem.price;
    item.category = CarCategory[inputItem.category];

    this.selectedItem = item;
  }

  onEditComplete(item: CartItem): void {
    this.cartService.updateCartItem(item);
    this.items = this.cartService.getCartItems();
  }

  onRemove(item: CartItem): void {
    this.selectedItem = null;    
    this.cartService.removeCartItem(item);
  }

}
