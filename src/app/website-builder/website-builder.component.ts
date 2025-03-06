import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-builder',
  templateUrl: './website-builder.component.html',
  styleUrls: ['./website-builder.component.scss']
})
export class WebsiteBuilderComponent {
  public websiteBuilderData = [
    {
      "title": "Restaurant websites built for sales first, style second.",
      "description": "Antler builds your website to drive sales. Our proven design grows Google traffic, outranks delivery apps, and beats your competition.",
      "topimage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/8e93ea53-6643-4e8f-a9d0-de724e37cc6d_2149595838.png",
      "name": "Website Builder",
      "sections": [
        {
          "title": "",
          "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/c702be71-2669-4a09-9586-85c3a01e9c07_Group%20172101.png",
          "text": "AI-optimized sites boost SEO and Google traffic.",
          "bgColor": "#ffffff"
        },
        {
          "title": "",
          "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/0328851c-2816-4790-b7e7-d8557c9fc52d_Frame%2017.png",
          "text": "Great ordering experience that increases sales.",
          "css": "left: auto;right: 80px;",
          "bgColor": "#E2EBFF"
        },
        {

          "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/60b7cfde-a018-4c48-8835-45c1ffd731d5_Frame%2017%20%281%29.png",
          "text": "Add your branding,then go live ASAP.",
          "backgroundImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/36c68c4d-1a4a-4399-b272-0741d7d86e75_e1dec0f1-9fcd-45f0-b90a-70629febe975_Frame%2037%20%281%29.png"
        }
      ],
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/228a80cd-beea-48bf-a581-4626a881f99e_Frame%2028.png",
      "secondSection": [
        {
          "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e71c721c-a38f-4586-a361-273f484e06a8_Group%20172791.png",
          "content": {
            "heading": "We build websites that Google loves",
            "para": "AI-optimized websites that boost your SEO and gets you more Google traffic."
          }
        },
        {
          "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e71c721c-a38f-4586-a361-273f484e06a8_Group%20172791.png",
          "content": {
            "heading": "Drive online sales like the big brands",
            "para": "Easy online ordering right on your website. Grow your traffic, grow your orders."
          }
        },
        {
          "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e71c721c-a38f-4586-a361-273f484e06a8_Group%20172791.png",
          "content": {
            "heading": "Your new website in days, not months ",
            "para": "Add your brand to our proven design, then you're ready to grow online."
          }
        }
      ],
      "secondsectionheading": "We build websites that Google loves",
      "bgImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/fa102399-8d55-4146-9517-852493265142_2542.jpg",
      "callButton": "Call us to get a Quote",
      "callLink": ""
    }
  ];

  constructor() {

  }
  ngOnInit(): void { }
}
