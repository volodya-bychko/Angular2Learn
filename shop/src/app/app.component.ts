import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product'
import { CartComponent } from './cart/cart.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductsService]
})

export class AppComponent implements OnInit{
  title: string = 'Task 1';
  products: Array<Product>;  
  
  constructor(private productsService: ProductsService) {  }

  onBuy(product: Product) {
    this.productsService.addCartProduct(product);
  } 

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
