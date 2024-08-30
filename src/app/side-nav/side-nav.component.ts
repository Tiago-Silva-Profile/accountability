import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideNavModule } from './side-nav/side-nav.module';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faDashboard,
  faLocation,
  faShop,
  faBox,
  faMoneyBill,
  faChartBar,
  faContactBook,
  faHand,
} from '@fortawesome/free-solid-svg-icons';


export interface MenuItem {
  title: string;
  icon: any; // Replace with appropriate icon type
  link: string;
}


@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    SideNavModule,
    FontAwesomeModule
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SideNavComponent{

  menuItems: MenuItem[] = [
    { title: 'Dashboard', icon: faDashboard, link: '/dashboard' },
    { title: 'Talões', icon: faLocation, link: '/lugs' },
    { title: 'Registro', icon: faShop, link: '/register' },
    // { title: 'Validação', icon: faBox, link: '/products' },
    // { title: 'Sales', icon: faMoneyBill, link: '/sales' },
    // { title: 'Statistics', icon: faChartBar, link: '/statistics' },
    // { title: 'Contact', icon: faContactBook, link: '/contact' },
    // { title: 'Help', icon: faHand, link: '/help' },
  ];
}
