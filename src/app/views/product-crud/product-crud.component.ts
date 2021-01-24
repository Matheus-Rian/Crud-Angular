import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'crud-product',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }
}
