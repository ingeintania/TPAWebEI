import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SliderComponent } from './homepage/slider/slider.component';
import { ProductWidgetComponent } from './homepage/product-widget/product-widget.component';
import { FeatureComponent } from './homepage/feature/feature.component';
import { LoginmodalComponent } from './header/loginmodal/loginmodal.component';
import {MatDialogModule} from '@angular/material'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegistermodalComponent } from './header/registermodal/registermodal.component';
import { AeroplanemodalComponent } from './homepage/product-widget/aeroplanemodal/aeroplanemodal.component';
import { HotelmodalComponent } from './homepage/product-widget/hotelmodal/hotelmodal.component';
import { TrainmodalComponent } from './homepage/product-widget/trainmodal/trainmodal.component';
import { RentcarmodalComponent } from './homepage/product-widget/rentcarmodal/rentcarmodal.component';
import { HotelComponent } from './hotel/hotel.component';
import { AeroplaneComponent } from './aeroplane/aeroplane.component';
import { RentcarComponent } from './rentcar/rentcar.component';
import { TrainComponent } from './train/train.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { AeroplaneSearchResultComponent } from './aeroplane/aeroplane-search-result/aeroplane-search-result.component'

// import { GoogleSigninComponent }  from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    SliderComponent,
    ProductWidgetComponent,
    FeatureComponent,
    LoginmodalComponent,
    RegistermodalComponent,
    AeroplanemodalComponent,
    HotelmodalComponent,
    TrainmodalComponent,
    RentcarmodalComponent,
    HotelComponent,
    AeroplaneComponent,
    RentcarComponent,
    TrainComponent,
    EntertainmentComponent,
    AeroplaneSearchResultComponent
  ],
  entryComponents: [
    LoginmodalComponent, 
    RegistermodalComponent,
    AeroplanemodalComponent,
    HotelmodalComponent,
    RentcarmodalComponent,
    HotelComponent,
    AeroplaneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
