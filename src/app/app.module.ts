import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BioComponent } from './bio/bio.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LatestComponent } from './latest/latest.component';
import { AcclaimComponent } from './acclaim/acclaim.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LatestDetailComponent } from './latest-detail/latest-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    BioComponent,
    CalendarComponent,
    LatestComponent,
    AcclaimComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    NavBarComponent,
    LatestDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
