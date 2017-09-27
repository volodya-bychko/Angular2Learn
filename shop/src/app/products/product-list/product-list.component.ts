import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/product/products.service'
import { Product } from '../../models/product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;  
  
  constructor(private productsService: ProductsService) {  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onBuy(product: Product) {    
    this.productsService.publishBuyProduct(product);
  }  

}
