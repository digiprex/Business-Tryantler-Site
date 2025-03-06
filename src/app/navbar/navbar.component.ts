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
      "url": "/",
      "options": [
        {
          "name": "Website Builder",
          "link": "/website-builder"
        },
        {
          "name": "Automated Marketing",
          "link": "/automation-marketing"
        },
        {
          "name": "Zero Commission Delivery",
          "link": "/zero-commission-delivery"
        },
        {
          "name": "Online Ordering",
          "link": "/online-ordering"
        },
        {
          "name": "Loyalty Program",
          "link": "/loyalty-program"
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

