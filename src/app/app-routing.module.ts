import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WebsiteBuilderComponent } from './website-builder/website-builder.component';
import { AutomationMarketingComponent } from './automation-marketing/automation-marketing.component';
import { ZeroCommissionDeliveryComponent } from './zero-commission-delivery/zero-commission-delivery.component';
import { OnlineOrderingComponent } from './online-ordering/online-ordering.component';
import { LoyaltyProgramComponent } from './loyalty-program/loyalty-program.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: `home`,
    component: HomeComponent
  },
  {
    path: `contact`,
    component: ContactComponent
  },
  {
    path: `about`,
    component: AboutComponent
  },
  {
    path: `website-builder`,
    component: WebsiteBuilderComponent
  },
  {
    path: `automation-marketing`,
    component: AutomationMarketingComponent
  },
  {
    path: `zero-commission-delivery`,
    component: ZeroCommissionDeliveryComponent
  },
  {
    path: `online-ordering`,
    component: OnlineOrderingComponent
  },
  {
    path: `loyalty-program`,
    component: LoyaltyProgramComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
