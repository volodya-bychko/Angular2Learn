import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Array<Product>;  

  constructor(private productsService: ProductsService) {  }

  ngOnInit() {
    this.products = this.productsService.getCartProducts();
  }

}
