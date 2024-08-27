import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import {
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-lugs',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  templateUrl: './home-lugs.component.html',
  styleUrl: './home-lugs.component.css'
})
export class HomeLugsComponent implements OnInit {

  widgets: any[] = [
    { color: 'green', icon: faBoxes, value: 32, label: 'CONGREGAÇÃO' },
    { color: 'brown', icon: faBoxes, value: 295, label: 'DÍZIMO IDENTIFICADO' },
    { color: 'red', icon: faBoxes, value: 45784, label: 'PONTO DE PREGAÇÃO' },
    { color: 'blue', icon: faBoxes, value: 346928, label: 'CEADALPE' },
    { color: 'purple', icon: faBoxes, value: 765, label: 'CEADALPE - META' },
    { color: 'pink', icon: faBoxes, value: 98, label: 'UMADALPE' },
    { color: 'red', icon: faBoxes, value: 45784, label: 'ORAÇÃO MISSIONARIA' },
    { color: 'blue', icon: faBoxes, value: 346928, label: 'ORAÇÃO MISSIONARIA - META' },
    { color: 'red', icon: faBoxes, value: 45784, label: 'COADALPE' },
    { color: 'blue', icon: faBoxes, value: 346928, label: 'AENPAZ' },
  ];

  constructor() {}

  ngOnInit(): void {
  }


}
