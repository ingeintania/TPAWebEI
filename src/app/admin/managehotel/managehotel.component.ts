import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatDialog, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { Hotel } from 'src/app/model/Hotel';
import { HotelService } from 'src/app/service/hotel.service';
import { CreatehotelmodalComponent } from './createhotelmodal/createhotelmodal.component';
import { UpdatehotelmodalComponent } from './updatehotelmodal/updatehotelmodal.component';
import { DeletehotelmodalComponent } from './deletehotelmodal/deletehotelmodal.component';

export interface HotelElement {
  id : number;
  name: string;
  price: number;
  image: string;
  location: number;
  hoteltype: number;
  address:string;
  star:number;
  rating_count:number;
  availibility:string;
  facilities:string;
}

@Component({
  selector: 'app-managehotel',
  templateUrl: './managehotel.component.html',
  styleUrls: ['./managehotel.component.scss']
})
export class ManagehotelComponent implements OnInit {

  displayedColumns: string[] =
  ['image', 'name', 'location', 'rating', 'address',
  'facilities', 'button'];
  dataSource: any;


  ELEMENT_DATA: HotelElement[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  hotelData : Hotel[]
  hotelDat : Hotel

  loaded:Boolean = false

  hotel:any

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getHotelData(){
    this.service.getHotel().subscribe(async result=>{
      this.hotelData=result
      this.hotelData.forEach( async x => {
        await this.ELEMENT_DATA.push({
          "id" : x.hotel_id,
          "name" : x.hotel_name,
          "price" : x.hotel_price,
          "image" : x.hotel_image_path,
          "location" : x.location_id,
          "hoteltype" : x.hoteltype_id,
          "address" : x.hotel_address,
          "star" : x.hotel_star,
          "rating_count" :x.hotel_rating_count,
          "availibility":x.hotel_availability,
          "facilities":x.hotel_facilities
        });
      });
      console.log(this.ELEMENT_DATA);
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    })
    setTimeout(() => {
      this.loaded = true
    }, 2000)
  }

  openCreate(){
    this.dialog.open(CreatehotelmodalComponent)
  }

  openUpdate(hotel : Hotel){
    var config : MatDialogConfig = new MatDialogConfig()

    config.data = {
      hotel : JSON.stringify(hotel)
    }

    console.log(hotel)

    this.dialog.open(UpdatehotelmodalComponent, config)
  }

  openDelete(hotel : Hotel){
    var config : MatDialogConfig = new MatDialogConfig()
    config.data = {
      hotel : JSON.stringify(hotel)
    }
    this.dialog.open(DeletehotelmodalComponent, config)
  }


  constructor(private service:HotelService, private dialog: MatDialog) {
    this.getHotelData()
  }

  ngOnInit() {
  }

}
