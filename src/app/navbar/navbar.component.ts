import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public template;
  public logo;
  public halal;
  public css;
  public links;
  public tagLine;
  public close: boolean = true;
  public isDropdownOpen: boolean = false;
  public selectedNavCategory: any;
  public selectedCategory: any;

  constructor(private appService: AppService) {
    this.template = this.appService.getContentData('template');
    this.logo = this.appService.getContentData('logo');
    this.halal = this.appService.getContentData('halal');
    this.css = this.appService.getContentData('css');
    this.tagLine = this.appService.getContentData('tagLine');
    this.links = this.appService.getContentData('navbar').links;
  }

  ngOnInit(): void {
  }

  change() {
    this.close = !this.close;
  }

  toggleButton(text: any) {
      this.isDropdownOpen = true;
      this.selectedCategory = text;
  }

  toggleSubCategories(option: any) {
    if (this.selectedNavCategory?.name === option.name) {
      this.selectedNavCategory = null;
    } else {
      this.selectedNavCategory = option;
    }
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }
}

