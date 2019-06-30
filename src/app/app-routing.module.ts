import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent } from './gallery/gallery.component';
import { BioComponent } from './bio/bio.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LatestComponent } from './latest/latest.component';
import { AcclaimComponent } from './acclaim/acclaim.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'latest', component: LatestComponent },
  { path: 'acclaim', component: AcclaimComponent },
  { path: 'bio', component: BioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
