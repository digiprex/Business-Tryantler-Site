import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit{
  public currentRouteParams: any;
  public service: any;
  public host: any;
  public allService: any;
  public hero: any;
  public routeSubscription: any;
  public currentSelectedBanner: any;
  constructor(private appService: AppService, private meta: Meta, private title: Title,private activatedRoute: ActivatedRoute) { 
      this.host = window.location.href.split('/');
      this.host = this.host[this.host.length - 1];
      this.hero = this.appService.getContentData('hero');
    }
  ngOnInit(): void {
    this.service = this.appService.getContentData('service');
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.currentRouteParams = params['name'];
      this.allService = this.hero && this.hero.services ? (this.hero.services?.filter((ele: { label: any; }) => ele.label !== params['name'])) : [];
      this.currentSelectedBanner = this.hero && this.hero.services ? this.hero && this.hero.services?.filter((ele: { label: any; }) => ele.label === params['name']) : [];
      if (this.hero && this.hero.allservices2) {
        this.currentSelectedBanner = this.hero && this.hero.allservices2 ? this.hero && this.hero.allservices2?.filter((ele: { label: any; }) => ele.label === params['name']) : [];
      }
    });
  }
  toggleContent2(key: string, index: number) {
    this.hero.hosts[key][0].faq[index].open = !this.hero.hosts[key][0].faq[index].open;
  }
}
