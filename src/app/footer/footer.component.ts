import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public links = [
    {
      "name": "Home",
      "url": "/home"
    },
    {
      "name": "How it Works",
      "url": "/about"
    },
    {
      "name": "Contact Us",
      "url": "/contact"
    }
  ];
  public services = [
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
  ];
  public success: boolean = false;

  footerDetails = new FormGroup({
    email: new FormControl("")
  });

  constructor(private appservice: AppService) { }

  ngOnInit(): void {
  }


  submitForm() {
    let body = {
      email: this.footerDetails.value.email
    }
    this.appservice.newsletterSubmission(body).subscribe(result => {
      this.success = true;
      this.footerDetails.reset();
    })
  }
}
