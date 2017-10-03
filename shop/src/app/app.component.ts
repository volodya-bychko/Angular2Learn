import { Component, ViewEncapsulation } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductsService } from './services/product/products.service'
import { Generator, GeneratorService } from './services/generator/generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [ ProductsService,
    { provide: GeneratorService, useValue: new GeneratorService(10) },
    { provide: Generator, useFactory:  (data: GeneratorService) => data, deps: [ GeneratorService ] } 
  ]
})

export class AppComponent {
  title: string = 'Task 3'; 
}
