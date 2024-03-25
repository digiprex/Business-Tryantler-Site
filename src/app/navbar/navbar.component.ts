import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public close: any;
  public links = [
    {
      "name": "Home",
      "url": "/home"
    },
    {
      "name": "Services",
      "url": "/services"
    },
    {
      "name": "Contact Us",
      "url": "/contact",
      "external": true
    },
    {
      "name": "Pricing",
      "url": "/pricing"
    },
    {
      "name": "Blogs",
      "url": "/blogs"
    },
    {
      "name": "App",
      "url": "/apps"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  change(comm: any) {
    this.close = comm;
  }
}

