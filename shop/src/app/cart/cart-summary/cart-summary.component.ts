import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CartService } from '../../services/cart/cart.service'
import { CartTotals } from '../../models/cart-totals'

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  sub: Subscription;
  private totalItemsQuantity: number = 0;
  private totalItemsPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.sub = this.cartService.channel$.subscribe(
      totals => {
        this.totalItemsPrice = totals.totalPrice;
        this.totalItemsQuantity = totals.totalQuantity;
      });
  }
}
