import { CarCategory } from './car-category';

export class Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    category: CarCategory;
    isAvailable: boolean;    
  }
