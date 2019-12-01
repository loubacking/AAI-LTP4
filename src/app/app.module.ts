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
import { VehiculComponent } from './modules/vehicul/vehicul.component';
import { VehiculHeadComponent } from './modules/vehicul/components/vehicul-head/vehicul-head.component';
import { VehiculBodyComponent } from './modules/vehicul/components/vehicul-body/vehicul-body.component';
import { GridComponent } from './modules/grid/grid.component';
import { GridHeaderComponent } from './modules/grid/components/grid-header/grid-header.component';
import { GridBodyComponent } from './modules/grid/components/grid-body/grid-body.component';
import { SubmitComponent } from './modules/submit/submit.component';
import { SubHeadComponent } from './modules/submit/components/sub-head/sub-head.component';
import { SubBodyComponent } from './modules/submit/components/sub-body/sub-body.component';
import { ContactComponent } from './modules/contact/contact.component';
import { ContHeaderComponent } from './modules/contact/components/cont-header/cont-header.component';
import { ContInfoComponent } from './modules/contact/components/cont-info/cont-info.component';
import { ContFormComponent } from './modules/contact/components/cont-form/cont-form.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';


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
    VehiculComponent,
    VehiculHeadComponent,
    VehiculBodyComponent,
    GridComponent,
    GridHeaderComponent,
    GridBodyComponent,
    SubmitComponent,
    SubHeadComponent,
    SubBodyComponent,
    ContactComponent,
    ContHeaderComponent,
    ContInfoComponent,
    ContFormComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
