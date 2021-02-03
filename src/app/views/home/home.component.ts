import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'crud-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: '',
    };
  }

  ngOnInit(): void {
  }

}
