import { Component } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public steps: { title: string, description: string, image: string }[] = [
    {
      title: "Show up at the top of Google",
      description: "Beat your competition with a website perfectly optimized for Google. Get more orders from people in your area.",
      image: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/0fbe6260-9193-40f1-8a02-1cce81015667_Frame%2023.png",

    },
    {
      title: "Grow sales with the easiest online ordering",
      description: "Guests order more from you when your online ordering experience feels as good as DoorDash.",
      image: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/c1f1ae20-9dad-44ac-b527-ad6d3ac8ea5b_Frame%2025.png",
    },
    {
      title: "Drive re-orders with your mobile app and rewards",
      description: "Get more repeat orders with your own 5-star mobile app. Drive loyalty with a rewards program, just like Starbucks.",
      image: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/d88124bc-5a4f-4baa-a614-56cdf5c32230_Frame%2024.png",
    },
    {
      title: "Keep guests engaged with auto-marketing",
      description: "Boost sales with proven, automated marketing campaigns. Send money-making emails and texts without writing a word.",
      image: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/58784437-78f6-47a3-bd39-061392b12a04_Frame%2026.png",
    }
  ];

  public faqs: { question: string; answer: string; open?: boolean }[] = [
    {
      question: "1. What is Antler Technologies, and how can it help my business?",
      answer: "AutoTech is an automation technology for businesses."
    },
    {
      question: "2. How does Antler Technologies collect customer feedback?",
      answer: "AutoTech integrates with your existing tools to improve efficiency."
    },
    {
      question: "3. Can I respond to customer reviews directly from the platform?",
      answer: "Yes, through our API integration."
    },
    {
      question: "4. How does AI help in reputation management?",
      answer: "Yes, AutoTech offers a mobile app for easier access."
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
