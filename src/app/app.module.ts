import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import {  MatSidenavModule } from '@angular/material/sidenav';
import { GalleryComponent } from './menu/gallery/gallery.component';
import { OffersComponent } from './menu/offers/offers.component';
import { PricesComponent } from './menu/prices/prices.component';
import { ContactusComponent } from './menu/contactus/contactus.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    OffersComponent,
    PricesComponent,
    ContactusComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    NgbModule
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
