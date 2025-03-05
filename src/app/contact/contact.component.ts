import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public successMsg: boolean = false;
  public success = false;
  public hero: any;
  userDetails1 = new FormGroup({
    email: new FormControl("")
  });

  contactDetails = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    phone: new FormControl(""),
    email: new FormControl(""),
    message: new FormControl("")
  });

  constructor(private appService: AppService, private router: Router, private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.setTitleAndMetaTags();
  }

  setTitleAndMetaTags(): void {
    this.titleService.setTitle('Contact Best Restaurant In Montreal | Mont Everest Masala | Reach Us Today');
    this.metaService.updateTag({ name: 'description', content: 'Mont Everest Masala in Montreal serves the best South Indian cuisine. Explore a menu brimming with veg and non-veg delights. Satisfaction awaits!' });
  }

  submitForm() {
    let body = {
      firstName: this.contactDetails.value.firstName,
      lastName: this.contactDetails.value.lastName,
      phone: this.contactDetails.value.phone,
      email: this.contactDetails.value.email,
      message: this.contactDetails.value.message
    }
    this.appService.contactformSubmission(body).subscribe(result => {
      this.success = true;
    });
  }
  formSubmit() {
    let body = {
      email: this.userDetails1.value.email
    }
    this.appService.newsletterSubmission(body).subscribe(result => {
      this.success = true;
    })
  }
}
