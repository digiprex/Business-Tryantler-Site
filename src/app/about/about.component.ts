import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AppService } from '../app.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public hero: any;
    public success = false;
    userDetails1 = new FormGroup({
      email: new FormControl("")
    });
  constructor(private titleService: Title, private metaService: Meta,private appService: AppService) { 
    this.hero = this.appService.getContentData('hero');

  }

  ngOnInit(): void {
    this.setTitleAndMetaTags();
  }

  setTitleAndMetaTags(): void {
    
  }
  toggleFaq(index: number) {
    this.hero.faqs[index].open = !this.hero.faqs[index].open;
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
