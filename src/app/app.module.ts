import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './modules/home/components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { HorizontalSearchComponent } from './modules/home/components/horizontal-search/horizontal-search.component';
import { JoinUsComponent } from './modules/home/components/join-us/join-us.component';
import { FeaturedVehiculsComponent } from './modules/home/components/featured-vehiculs/featured-vehiculs.component';
import { OurParternsComponent } from './modules/home/components/our-parterns/our-parterns.component';
import { OurAgentsComponent } from './modules/home/components/our-agents/our-agents.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    HorizontalSearchComponent,
    JoinUsComponent,
    FeaturedVehiculsComponent,
    OurParternsComponent,
    OurAgentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
