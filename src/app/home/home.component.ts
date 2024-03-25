import { Component } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public website: any;
  public sliderImage: any;
  public templatetype: any;

  public services = [
    {
      "img": "../../assets/new_images/social-management-home.svg",
      "title": "Social Media Management",
      "cta": "/services"
    },
    {
      "img": "../../assets/new_images/seo-home.svg",
      "title": "Search Engine Optimization",
      "cta": "/services"
    },
    {
      "img": "../../assets/new_images/web-design-home.svg",
      "title": "Web Design + Development",
      "cta": "/services"
    },
    {
      "img": "../../assets/new_images/sms-home.svg",
      "title": "SMS and Email Marketing",
      "cta": "/services"
    },
    {
      "img": "../../assets/new_images/reputation-home.svg",
      "title": "Reputation Management",
      "cta": "/services"
    },
    {
      "img": "../../assets/new_images/analytics-home.svg",
      "title": "Real Time Analytical Insights & Automated Reports",
      "cta": "/services"
    }
  ];

  ngOnInit(): void {
  }

  constructor (){
  }

  homesSliderImage = [
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/b8824377-faa0-46c8-ba07-d3019e42edd1_leo_vonaco_slide.png",
      "thumbImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/b8824377-faa0-46c8-ba07-d3019e42edd1_leo_vonaco_slide.png"
    },
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/7ca167fd-37f5-455b-acf1-6dea59d8a9b0_slider2.png",
      "thumbImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/7ca167fd-37f5-455b-acf1-6dea59d8a9b0_slider2.png"
    }
  ];
}
