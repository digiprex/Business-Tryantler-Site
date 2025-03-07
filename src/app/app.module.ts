import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { WebsiteBuilderComponent } from './website-builder/website-builder.component';
import { AutomationMarketingComponent } from './automation-marketing/automation-marketing.component';
import { ZeroCommissionDeliveryComponent } from './zero-commission-delivery/zero-commission-delivery.component';
import { OnlineOrderingComponent } from './online-ordering/online-ordering.component';
import { LoyaltyProgramComponent } from './loyalty-program/loyalty-program.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    WebsiteBuilderComponent,
    AutomationMarketingComponent,
    ZeroCommissionDeliveryComponent,
    OnlineOrderingComponent,
    LoyaltyProgramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
