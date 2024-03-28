import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PostsComponent } from './posts/posts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/home`,
    pathMatch: 'full'
  },
  {
    path: `home`,
    component: HomeComponent
  },
  {
    path: `menu`,
    component: MenuComponent
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
    path: `gallery`,
    component: GalleryComponent
  },
  {
    path: `blogs`,
    component: BlogsComponent
  },
  {
    path: `post/:name`,
    component: PostsComponent
  },
  {
    path: `cart`,
    component: CartComponent
  },
  {
    path: `checkout`,
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
