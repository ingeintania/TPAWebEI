import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HotelComponent } from './hotel/hotel.component';
import { AeroplaneComponent } from './aeroplane/aeroplane.component';
import { RentcarComponent } from './rentcar/rentcar.component';
import { TrainComponent } from './train/train.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
