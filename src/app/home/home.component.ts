import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  public speacialfeature = [
    "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e90c2368-d88e-427e-a582-29d227d49419_Item%20%282%29.png",
    "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/5e827682-1a0f-44c2-868d-83b9de59eb1b_Item.png",
    "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/d19fcd40-a47a-4ba7-bb12-5550c1ab001e_Item%20%281%29.png"
  ];

  public beliefs = [
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/6d883039-5efc-4c02-b1a0-9f31e6ed729d_2150384836%20%281%29.png",
      "title": "Your sales growth is the most important thing",
      "description": "We've built every part of our product with one goal: driving sales for you. For example, our website system prioritizes what works to drive sales, not fancy customization."
    },
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/1d305702-9797-41d6-a9b4-7f14914d258e_17957%20%281%29.png",
      "title": "We have to earn your trust every month",
      "description": "Restaurants are hard enough. You don’t need another tech vendor tying you up in a long-term contract. We only do month-to-month."
    },
    {
      "image": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/64268f90-32be-46b9-b37f-f71e09dff3bb_4877%20%281%29.png",
      "title": "Restaurants should own their customer relationships",
      "description": "Many tech companies separate restaurants from their customers. With Antler, you own your customer data. If you ever decide to leave Antler, you get to bring your customers with you."
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
