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
import {MatDialogModule, MatCardModule, MatTableModule, MatPaginatorModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatSelectModule} from '@angular/material'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

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
import { AeroplaneSearchResultComponent } from './aeroplane/aeroplane-search-result/aeroplane-search-result.component';
import { GooglesigninComponent } from './header/loginmodal/googlesignin/googlesignin.component';
import { FacebooksigninComponent } from './header/loginmodal/facebooksignin/facebooksignin.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http'
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { HotelMapComponent } from './hotel/hotel-map/hotel-map.component';
import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
import { HoteldetailComponent } from './hoteldetail/hoteldetail.component';
// import { ClipboardModule } from 'ngx-clipboard';
import { ShareButtonModule } from 'ngx-sharebuttons';
import { EntertainmentpageComponent } from './entertainment/entertainmentpage/entertainmentpage.component';
import { EntertainmentsearchComponent } from './entertainment/entertainmentsearch/entertainmentsearch.component';
import { HotelFilterPipe } from './hotel/hotel-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntertainmentFilterPipe } from './entertainment/entertainment-filter.pipe';
import { ManageeventComponent } from './admin/manageevent/manageevent.component';
import { ChatComponent } from './chat/chat.component';
import { CreateeventmodalComponent } from './admin/manageevent/createeventmodal/createeventmodal.component';
import { UpdateeventmodalComponent } from './admin/manageevent/updateeventmodal/updateeventmodal.component';
import { DeleteeventmodalComponent } from './admin/manageevent/deleteeventmodal/deleteeventmodal.component';
import { PromoComponent } from './promo/promo.component';
import { ManageblogComponent } from './admin/manageblog/manageblog.component';
import { BlogComponent } from './blog/blog.component';
import { CreateblogmodalComponent } from './admin/manageblog/createblogmodal/createblogmodal.component';
import { UpdateblogmodalComponent } from './admin/manageblog/updateblogmodal/updateblogmodal.component';
import { DeleteblogmodalComponent } from './admin/manageblog/deleteblogmodal/deleteblogmodal.component';
import { BlogdetailComponent } from './blog/blogdetail/blogdetail.component';
import { ManagehotelComponent } from './admin/managehotel/managehotel.component';
import { CreatehotelmodalComponent } from './admin/managehotel/createhotelmodal/createhotelmodal.component';
import { UpdatehotelmodalComponent } from './admin/managehotel/updatehotelmodal/updatehotelmodal.component';
import { DeletehotelmodalComponent } from './admin/managehotel/deletehotelmodal/deletehotelmodal.component';
import { ZommedimageComponent } from './chat/zommedimage/zommedimage.component';
import { ManagetrainComponent } from './admin/managetrain/managetrain.component';
import { CreatetrainmodalComponent } from './admin/managetrain/createtrainmodal/createtrainmodal.component';
import { UpdatetrainmodalComponent } from './admin/managetrain/updatetrainmodal/updatetrainmodal.component';
import { DeletetrainmodalComponent } from './admin/managetrain/deletetrainmodal/deletetrainmodal.component';
import { ManageaeroplaneComponent } from './admin/manageaeroplane/manageaeroplane.component';
import { CreateaeroplanemodalComponent } from './admin/manageaeroplane/createaeroplanemodal/createaeroplanemodal.component';
import { UpdateaeroplanemodalComponent } from './admin/manageaeroplane/updateaeroplanemodal/updateaeroplanemodal.component';
import { DeleteaeroplanemodalComponent } from './admin/manageaeroplane/deleteaeroplanemodal/deleteaeroplanemodal.component';
import { MapHotelComponent } from './map-hotel/map-hotel.component';
import { TrainPipe } from './train/train.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { AeroplaneFilterPipe } from './aeroplane/aeroplane-filter.pipe';
import { CarFilterPipe } from './rentcar/car-filter.pipe';
import { ManagehotelPipe } from './admin/managehotel/managehotel.pipe';
import { BlogFilterPipe } from './blog/blog-filter.pipe';
import { EntertainmentdetailComponent } from './entertainment/entertainmentdetail/entertainmentdetail.component';
import { NearestDataFilterPipe } from './hoteldetail/nearest-data-filter.pipe';
import { SlidermodalComponent } from './hoteldetail/slidermodal/slidermodal.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ChatForumComponent } from './chat-forum/chat-forum.component';
import { EventOrderComponent } from './event-order/event-order.component';
import { OrderPipe } from './order/order.pipe';

// import {CustomMaterialModule} from "./material.module";
// import {FormsModule, ReactiveFormsModule} from "@angular/forms";


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
    AeroplaneSearchResultComponent,
    GooglesigninComponent,
    FacebooksigninComponent,
    MyaccountComponent,
    HotelMapComponent,
    HotelListComponent,
    HoteldetailComponent,
    EntertainmentpageComponent,
    EntertainmentsearchComponent,
    HotelFilterPipe,
    EntertainmentFilterPipe,
    ManageeventComponent,
    ChatComponent,
    CreateeventmodalComponent,
    UpdateeventmodalComponent,
    DeleteeventmodalComponent,
    PromoComponent,
    ManageblogComponent,
    BlogComponent,
    CreateblogmodalComponent,
    UpdateblogmodalComponent,
    DeleteblogmodalComponent,
    BlogdetailComponent,
    ManagehotelComponent,
    CreatehotelmodalComponent,
    UpdatehotelmodalComponent,
    DeletehotelmodalComponent,
    ZommedimageComponent,
    ManagetrainComponent,
    CreatetrainmodalComponent,
    UpdatetrainmodalComponent,
    DeletetrainmodalComponent,
    ManageaeroplaneComponent,
    CreateaeroplanemodalComponent,
    UpdateaeroplanemodalComponent,
    DeleteaeroplanemodalComponent,
    MapHotelComponent,
    TrainPipe,
    CheckoutComponent,
    OrderComponent,
    AeroplaneFilterPipe,
    CarFilterPipe,
    ManagehotelPipe,
    BlogFilterPipe,
    EntertainmentdetailComponent,
    NearestDataFilterPipe,
    SlidermodalComponent,
    AdminComponent,
    ChatForumComponent,
    EventOrderComponent,
    OrderPipe
  ],
  entryComponents: [
    LoginmodalComponent,
    RegistermodalComponent,
    AeroplanemodalComponent,
    HotelmodalComponent,
    RentcarmodalComponent,
    HotelComponent,
    AeroplaneComponent,
    HotelMapComponent,
    CreateeventmodalComponent,
    UpdateeventmodalComponent,
    DeleteeventmodalComponent,
    CreateblogmodalComponent,
    UpdateblogmodalComponent,
    DeleteblogmodalComponent,
    CreatehotelmodalComponent,
    UpdatehotelmodalComponent,
    DeletehotelmodalComponent,
    ZommedimageComponent,
    CreatetrainmodalComponent,
    UpdatetrainmodalComponent,
    DeletetrainmodalComponent,
    CreateaeroplanemodalComponent,
    UpdateaeroplanemodalComponent,
    DeleteaeroplanemodalComponent,
    SlidermodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    // ClipboardModule,
    ShareButtonModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
        MatInputModule,
        MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
