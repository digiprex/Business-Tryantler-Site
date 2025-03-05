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
    this.titleService.setTitle('Top Best French Restaurant In Montreal | Mont Everest Masala');
    this.metaService.updateTag({ name: 'description', content: 'Experience the flavors of South Indian food at Mont Everest Masala, Montreals top spot for authentic dishes. Indulge in diverse veg and non-veg options today!' });
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
