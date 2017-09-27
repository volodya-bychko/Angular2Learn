import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductsService } from './service/products.service';
import { Product } from './model/product'
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

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onBuy(product: Product) {
    this.productsService.addCartProduct(product);
  } 
}
