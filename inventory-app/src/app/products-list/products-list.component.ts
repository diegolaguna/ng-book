import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html'
})

export class ProductsListComponent {

  @Input() productList: Product[];
  @Output() onProductSelected: EventEmitter<Product>
    
  constructor() {

  }

  ngOnInit() {
  }

}
