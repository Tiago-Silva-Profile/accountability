import { Component, OnInit } from '@angular/core';
import {
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-top-widgets',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
  ],
  templateUrl: './top-widgets.component.html',
  styleUrl: './top-widgets.component.css'
})
export class TopWidgetsComponent implements OnInit {

  widgets: any[] = [
    { color: 'green', icon: faLocation, value: 32, label: 'Locations' },
    { color: 'yellow', icon: faShop, value: 295, label: 'Shops' },
    { color: 'red', icon: faBoxes, value: 45784, label: 'Products Sold' },
    { color: 'blue', icon: faMoneyBill, value: 346928, label: 'Total Revenue' },
];

  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;

  constructor() { }

  ngOnInit(): void {
  }


}
