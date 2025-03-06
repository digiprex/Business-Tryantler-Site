import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  userDetailsForm = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl('', [Validators.required, Validators.email]),
    BusinessName: new FormControl(''),
    Message: new FormControl(''),
  });
  public success: boolean = false;

  constructor(public appService: AppService) { }

  ngOnInit(): void { }

  submitForm() {
    let body = {
      ...this.userDetailsForm.value,
    };
    this.appService.contactformSubmission(body).subscribe((result) => {
      this.success = true;
      this.userDetailsForm.reset();
    });
  }
}
