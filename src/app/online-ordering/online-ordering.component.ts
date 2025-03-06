import { Component } from '@angular/core';

@Component({
  selector: 'app-online-ordering',
  templateUrl: './online-ordering.component.html',
  styleUrls: ['./online-ordering.component.scss']
})
export class OnlineOrderingComponent {
  public onlineordering = [
    {
      "title": "Make your online ordering as good as the big brands.",
      "description": "Antler’s online ordering feels familiar and easy, so more customers order directly from you.",
      "topimage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/875e3934-98cd-46c8-89a1-479a5cd25053_2149950116.png",
      "name": "Online Ordering",
      "sections": [
        {
          "title": "Online ordering that helps you grow",
          "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/059ac15b-311c-459d-9c28-7d7a7f8cbd04_Frame%2017%20%285%29.png",
          "text": "Feels like the apps your customers use daily.",
          "bgColor": "#ffffff"
        },
        {
          "title": "",
          "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/47c8a103-7206-4ef5-8eba-c79cd45a8324_Frame%2017%20%287%29.png",
          "text": "Own your data. Grow your list. Connect with your customers.",
          "css": "left: auto;right: 80px;",
          "bgColor": "#e8ebfc"
        },
        {
          "title": "",
          "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/6e25da98-414b-4218-9db6-cc8a59423918_Frame%2017%20%286%29.png",
          "text": "Direct orders: cheaper for guests, better for you.",
          "bgColor": "#ffffff",
          "backgroundImage": ""
        }
      ],
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/73363673-0118-4473-99be-6bd0f58828f2_Group%20172686%20%281%29.png",
      "secondSection": [
        {
          "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e71c721c-a38f-4586-a361-273f484e06a8_Group%20172791.png",
          "content": {
            "heading": "Easy for your guests to make the switch",
            "para": "Both your website and mobile online ordering are easy for customers, since they feel familiar."
          }
        },
        {
          "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e71c721c-a38f-4586-a361-273f484e06a8_Group%20172791.png",
          "content": {
            "heading": "Start owning your customer data",
            "para": "Direct orders mean you get customer data, not third parties. Build more connections with your guests."
          }
        },
        {
          "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e71c721c-a38f-4586-a361-273f484e06a8_Group%20172791.png",
          "content": {
            "heading": "Cheaper and better for your guests",
            "para": "Ordering directly means that guests avoid third-party fees, so they'll go to you first."
          }
        }
      ],
      "secondsectionheading": "Online ordering that feels like the delivery apps",
      "bgImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/fa102399-8d55-4146-9517-852493265142_2542.jpg",
      "callButton": "Call us to get a Quote",
      "callLink": ""
    }
  ];
}
