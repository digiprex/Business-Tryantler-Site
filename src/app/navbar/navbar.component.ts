import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public close: any;
  public isDropdownOpen: boolean = false;
  public links = [
    {
      "name": "Home",
      "url": "/home"
    },
    {
      "name": "How it works",
      "url": "/about"
    },
    {
      "name": "Services",
      "url": "/services",
      "options": [
        {
          "name": "Website Builder",
          "link": "/service/websiteBuilder"
        },
        {
          "name": "Automated Marketing",
          "link": "/service/automatedmarketing"
        },
        {
          "name": "Zero Commission Delivery",
          "link": "/service/zerocommissiondelivery"
        },
        {
          "name": "Online Ordering",
          "link": "/service/onlineordering"
        },
        {
          "name": "Loyalty Program",
          "link": "/service/loyaltyprogram"
        }
      ]
    },
    {
      "name": "Contact Us",
      "url": "/contact"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  toggleButton() {
    this.isDropdownOpen = true;
  }

  change(comm: any) {
    this.close = comm;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }
}

