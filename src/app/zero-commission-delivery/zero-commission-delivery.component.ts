import { Component } from '@angular/core';

@Component({
  selector: 'app-zero-commission-delivery',
  templateUrl: './zero-commission-delivery.component.html',
  styleUrls: ['./zero-commission-delivery.component.scss']
})
export class ZeroCommissionDeliveryComponent {
  public zerocommissiondelivery = [
    {
      "title": "Profitable delivery and a great guest experience.",
      "description": "Get food to your customers on time, by top-rated drivers, at a fair price.",
      "topimage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/2f7f3c47-d408-40ce-82dd-fe624b4c92ff_9100.png",
      "name": "Zero Commission Delivery",
      "sections": [
        {
          "title": "Third-party delivery,no third-party commissions",
          "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/7b42665b-f0ec-49a6-8e5c-f4fb922b13d0_Group%20172101%20%282%29.png",
          "text": "Top third-party drivers deliver for you. One flat fee. No markup from us.",
          "bgColor": "#ffffff"
        },
        {
          "title": "",
          "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/323977e7-0e46-4f5d-af06-6fd5c04ca3a6_Frame%2017%20%283%29.png",
          "text": "Use your in-house delivery drivers, third-party, or both.",
          "css": "left: auto;right: 80px;",
          "backgroundImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/36c68c4d-1a4a-4399-b272-0741d7d86e75_e1dec0f1-9fcd-45f0-b90a-70629febe975_Frame%2037%20%281%29.png"
        },
        {
          "title": "",
          "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/948a41be-538d-47a4-81f8-ceb7bd23c7fd_Frame%2017%20%284%29.png",
          "text": "Call your customers if needed. We'll pay for any delivery problems.",
          "bgColor": "#ffffff"
        }
      ],
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f45be672-32ea-4c27-a6e6-f0069b2ac090_Group%20172686.png",
      "secondSection": [
        {
          "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e71c721c-a38f-4586-a361-273f484e06a8_Group%20172791.png",
          "content": {
            "heading": "Pay a flat rate for delivery",
            "para": "Use third-party drivers at fixed rates. Guests pay delivery on small orders, you chip in for larger ones."
          }
        },
        {
          "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e71c721c-a38f-4586-a361-273f484e06a8_Group%20172791.png",
          "content": {
            "heading": "Get the best drivers, commission free",
            "para": "We only use drivers rated 4.5 stars or higher to deliver your food."
          }
        },
        {
          "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e71c721c-a38f-4586-a361-273f484e06a8_Group%20172791.png",
          "content": {
            "heading": "A direct line to your customers",
            "para": "You can call customers directly. We'll cover refunds for any delivery issues."
          }
        }
      ],
      "secondsectionheading": "Delivery that's better for you and your guests",
      "bgImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/fa102399-8d55-4146-9517-852493265142_2542.jpg",
      "callButton": "Call us to get a Quote",
      "callLink": ""
    }
  ];
}
