import { Component } from '@angular/core';

@Component({
  selector: 'app-automation-marketing',
  templateUrl: './automation-marketing.component.html',
  styleUrls: ['./automation-marketing.component.scss']
})
export class AutomationMarketingComponent {
  public automatedmarketing = [
    {
      "title": "Never miss another marketing opportunity again.",
      "description": "Grow sales with automated campaigns. Drive repeat orders with proven email and text marketing on autopilot.",
      "topimage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/ff144622-746c-49a6-968d-88ef17492b6d_71894.png",
      "name": "Automated Marketing",
      "sections": [
        {
          "title": "Reach more customers with automated marketing",
          "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/d02ef3dc-8d19-40de-b098-9370cdae45b5_Group%20172101%20%285%29.png",
          "text": "Boost sales with smart, automated campaigns.",
          "bgColor": "#ffffff"
        },
        {
          "title": "",
          "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/4ae673bd-c1cb-453d-a103-88f5cd833013_Group%20172101%20%286%29.png",
          "text": "Your orders, your data. Grow your list, grow your sales.",
          "css": "left: auto;right: 80px;",
          "bgColor": "#E2EBFF"
        },
        {
          "title": "",
          "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/52de29bf-504b-447f-824f-acf18aaa2dcb_Group%20172101%20%287%29.png",
          "text": "Write emails instantly with AI.",
          "backgroundImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/36c68c4d-1a4a-4399-b272-0741d7d86e75_e1dec0f1-9fcd-45f0-b90a-70629febe975_Frame%2037%20%281%29.png"
        }
      ],
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/fc0b75a5-0d73-4815-9c86-a76ab47f6298_Group%20172686%20%283%29.png",
      "secondSection": [
        {
          "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e71c721c-a38f-4586-a361-273f484e06a8_Group%20172791.png",
          "content": {
            "heading": "Grow your sales with proven campaigns",
            "para": "Run automated marketing that grow orders."
          }
        },
        {
          "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e71c721c-a38f-4586-a361-273f484e06a8_Group%20172791.png",
          "content": {
            "heading": "Grow your customer list",
            "para": "Every direct order grows your list, giving you more data to drive more sales."
          }
        },
        {
          "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e71c721c-a38f-4586-a361-273f484e06a8_Group%20172791.png",
          "content": {
            "heading": "Write faster with AI",
            "para": "Sending your own campaign? Use our AI assistant to write email blasts in seconds."
          }
        }
      ],
      "secondsectionheading": "Money-making marketing, powered by customer data",
      "bgImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/fa102399-8d55-4146-9517-852493265142_2542.jpg",
      "callButton": "Call us to get a Quote",
      "callLink": ""
    }
  ];
}
