import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HotelComponent } from './hotel/hotel.component';
import { AeroplaneComponent } from './aeroplane/aeroplane.component';
import { RentcarComponent } from './rentcar/rentcar.component';
import { TrainComponent } from './train/train.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { HotelMapComponent } from './hotel/hotel-map/hotel-map.component';
import { HoteldetailComponent } from './hoteldetail/hoteldetail.component';
import { EntertainmentpageComponent } from './entertainment/entertainmentpage/entertainmentpage.component';
import { EntertainmentsearchComponent } from './entertainment/entertainmentsearch/entertainmentsearch.component';
import { ChatComponent } from './chat/chat.component';
import { ManageeventComponent } from './admin/manageevent/manageevent.component';
import { ManageblogComponent } from './admin/manageblog/manageblog.component';
import { BlogComponent } from './blog/blog.component';
import { ManagehotelComponent } from './admin/managehotel/managehotel.component';
import { ManagetrainComponent } from './admin/managetrain/managetrain.component';
import { ManageaeroplaneComponent } from './admin/manageaeroplane/manageaeroplane.component';
import { PromoComponent } from './promo/promo.component';
import { BlogdetailComponent } from './blog/blogdetail/blogdetail.component';
import { EntertainmentdetailComponent } from './entertainment/entertainmentdetail/entertainmentdetail.component';
import { AdminComponent } from './admin/admin/admin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ChatForumComponent } from './chat-forum/chat-forum.component';
import { OrderComponent } from './order/order.component';
import { EventOrderComponent } from './event-order/event-order.component';


const routes: Routes = [
  {
    path:"",
    component: HomepageComponent
  },
  {
    path:"hotel",
    component: HotelComponent
  },
  {
    path:"aeroplane",
    component: AeroplaneComponent
  },
  {
    path:"rentcar",
    component: RentcarComponent
  },
  {
    path:"train",
    component: TrainComponent
  },
  {
    path:"entertainment",
    component: EntertainmentComponent
  },
  {
    path:"myaccount",
    component: MyaccountComponent
  },
  {
    path:"hotel-map",
    component: HotelMapComponent
  },
  {
    path:"entertainment",
    component: EntertainmentpageComponent
  },
  {
    path:"entertainment/search",
    component: EntertainmentsearchComponent
  },
  {
    path:"chat",
    component: ChatComponent
  },
  {
    path:"blog",
    component: BlogComponent
  },
  {
    path:"admin/manageevent",
    component: ManageeventComponent
  },
  {
    path:"admin/manageblog",
    component: ManageblogComponent
  },
  {
    path:"admin/managehotel",
    component: ManagehotelComponent
  },
  {
    path:"admin/managetrain",
    component: ManagetrainComponent
  },
  {
    path:"admin/manageaeroplane",
    component: ManageaeroplaneComponent
  },
  {
    path:"promo",
    component: PromoComponent
  },
  { path: 'blog/:blog_id',
  component: BlogdetailComponent
  }
  ,
  { path: 'entertainment/:entertainment_id',
  component: EntertainmentdetailComponent
  }
  ,
  { path: 'hotel/:hotel_id',
  component: HoteldetailComponent
  }
  ,
  {
    path:"admin",
    component: AdminComponent
  },
  {
    path:"checkout",
    component: CheckoutComponent
  },
  {
    path:"chat-forum",
    component: ChatForumComponent
  },
  {
    path:"order",
    component: OrderComponent
  },
  {
    path:"event-order",
    component: EventOrderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
