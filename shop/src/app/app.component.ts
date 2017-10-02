import { Component, ViewEncapsulation } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductsService } from './services/product/products.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [ ProductsService ]
})

export class AppComponent {
  title: string = 'Task 3'; 
}
