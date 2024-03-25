import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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
      "url": "/contact"
    },
    {
      "name": "Pricing",
      "url": "/pricing"
    },
    {
      "name": "Blogs",
      "url": "/services"
    },
    {
      "name": "App",
      "url": "/apps"
    },
    {
      "name": "Raise A Request",
      "url": "/request"
    },
    {
      "name": "Refund & Cancellation Policy",
      "url": "/policies"
    },
    {
      "name": "Help & Support",
      "url": "/faq"
    }
  ];
  public services = [
    {
      "name": "Social Media Management",
      "url": "/services"
    },
    {
      "name": "Web Design + Development",
      "url": "/services"
    },
    {
      "name": "Search Engine Optimization",
      "url": "/services"
    },
    {
      "name": "Text + Email Marketing",
      "url": "/services"
    },
    {
      "name": "Reputation Management",
      "url": "/services"
    }
  ];
}
