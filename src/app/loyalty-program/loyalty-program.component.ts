import { Component } from '@angular/core';

@Component({
  selector: 'app-loyalty-program',
  templateUrl: './loyalty-program.component.html',
  styleUrls: ['./loyalty-program.component.scss']
})
export class LoyaltyProgramComponent {
  public loyaltyprogram = [
    {
      "title": "Offer a rewards program like the national chains.",
      "description": "Build customer loyalty with a rewards program. Keep guests coming back for more, just like the big brands.",
      "topimage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/33b1b27c-0c6c-4f5b-9596-276d4618a43d_2147826802.png",
      "name": "Loyalty Program",
      "sections": [
        {
          "title": "Boost your repeat orders",
          "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/fd3c7ad8-28ec-4f64-869b-4da76241f576_Frame%2017%20%288%29.png",
          "text": "Encourage casual customers to come back.",
          "bgColor": "#ffffff"
        },
        {
          "title": "",
          "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/fa662b36-edf1-4fad-a4f1-0ce39109001c_Group%20172101%20%283%29.png",
          "text": "Quick rewards signup gets more loyal fans.",
          "css": "left: auto;right: 80px;",
          "backgroundImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/36c68c4d-1a4a-4399-b272-0741d7d86e75_e1dec0f1-9fcd-45f0-b90a-70629febe975_Frame%2037%20%281%29.png"
        },
        {
          "title": "",
          "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/df35205a-94a1-4bfc-b902-60e915b7c9fa_Group%20172101%20%284%29.png",
          "text": "Simple setup. Easy for customers to earn. Easy to track.",
          "bgColor": "#ffffff"
        }
      ],
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/eaed2779-aee0-4cda-bde6-3c374f37ebbd_Group%20172686%20%282%29.png",
      "secondSection": [
        {
          "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e71c721c-a38f-4586-a361-273f484e06a8_Group%20172791.png",
          "content": {
            "heading": "Use rewards to get more fans",
            "para": "Loyalty points turn occasional buyers into loyal regulars."
          }
        },
        {
          "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e71c721c-a38f-4586-a361-273f484e06a8_Group%20172791.png",
          "content": {
            "heading": "No-brainer guest signup",
            "para": "Customers can join your rewards program in seconds."
          }
        },
        {
          "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e71c721c-a38f-4586-a361-273f484e06a8_Group%20172791.png",
          "content": {
            "heading": "Easy for guests to track rewards",
            "para": "Guests can track points easily, especially on your app."
          }
        }
      ],
      "secondsectionheading": "Run a loyalty program your regulars will love",
      "bgImage": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/fa102399-8d55-4146-9517-852493265142_2542.jpg",
      "callButton": "Call us to get a Quote",
      "callLink": ""
    }
  ];
}
