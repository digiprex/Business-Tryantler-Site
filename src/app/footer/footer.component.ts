import { Component, Renderer2 } from '@angular/core';
import { AppService } from '../app.service';
import { Meta, Title } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';

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
      "name": "About Us",
      "url": "/about"
    },
    {
      "name": "Menu",
      "url": "/menu"
    },
    {
      "name": "Gallery",
      "url": "/gallery"
    },
    {
      "name": "Contact Us",
      "url": "/contact",
      "external": true
    },
  ];
  public website: any;
    public sliderImage: any;
    public templatetype: any;
    public hero: any;
  
    constructor(private appService: AppService, private formBuilder: FormBuilder, private renderer: Renderer2, private titleService: Title, private metaService: Meta) {
      this.templatetype = this.appService.getContentData('templatetype');
      this.hero = this.appService.getContentData('hero');
    }
}
