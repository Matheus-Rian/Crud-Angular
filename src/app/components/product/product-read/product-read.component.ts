
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'crud-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  displayedColumns = ['id', 'name', 'price', 'action'];
  products: Product[];

  constructor(private productService: ProductService ) { }

  ngOnInit(): void {
    this.read();
  }

  read(): void {
    this.productService.read()
      .subscribe(products => {
        this.products = products;
        console.log(products);
      });
  }
}
