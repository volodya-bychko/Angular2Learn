import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Product } from './product'
import { CarCategory } from './car-category'

@Injectable()
export class ProductsService {

  private channel = new Subject<Product>();
  
  private products: Array<Product> = [ 
    {id: 0, name: 'VW Touran', description: '1.4 TSI', price: 15000, category: CarCategory.Family, isAvailable: true},
    {id: 1, name: 'VW Arteon', description: '1.8 TSI', price: 25000, category: CarCategory.Sport, isAvailable: false},
    {id: 2, name: 'VW Golf', description: '1.6 TDI', price: 5000, category: CarCategory.Sport, isAvailable: true},
  ];

  public channel$ = this.channel.asObservable();

  publishBuyProduct(product: Product) {
    this.channel.next(product);
  }

  getProducts(): Product[] {
      return this.products;
  }
}
