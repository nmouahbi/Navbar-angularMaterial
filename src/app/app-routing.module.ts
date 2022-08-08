import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './menu/home/home.component';
import { AboutComponent } from './menu/about/about.component';
import { GalleryComponent } from './menu/gallery/gallery.component';
import { OffersComponent } from './menu/offers/offers.component';
import { PricesComponent } from './menu/prices/prices.component';
import { ContactusComponent } from './menu/contactus/contactus.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'prices', component: PricesComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
