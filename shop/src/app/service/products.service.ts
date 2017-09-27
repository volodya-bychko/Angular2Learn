import { Injectable } from '@angular/core';
import { Product } from '../model/product'
import { CarCategory } from '../model/car-category'

@Injectable()
export class ProductsService {
  
  private products: Array<Product> = [ 
    {name: 'VW Touran', description: '1.4 TSI', price: 15000, category: CarCategory.Family, isAvailable: true},
    {name: 'VW Arteon', description: '1.8 TSI', price: 25000, category: CarCategory.Sport, isAvailable: false},
    {name: 'VW Golf', description: '1.6 TDI', price: 5000, category: CarCategory.Sport, isAvailable: true},
  ];

  private cartProducts: Array<Product>;

  constructor() {
    this.cartProducts = new Array<Product>();
   }

  getProducts(): Product[] {
      return this.products;
  }

  addCartProduct(product: Product){
    this.cartProducts.push(product);
  }

  getCartProducts(): Product[] {
    return this.cartProducts;
  }

}
