import { Component, OnInit, ViewChild } from '@angular/core';
import { Entertainment } from 'src/app/model/Entertainment';
import { Location } from 'src/app/model/Location';
import { EntertainmentService } from 'src/app/service/Entertainment.service';
import { MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource } from '@angular/material';
import { CreateeventmodalComponent } from './createeventmodal/createeventmodal.component';
import { config } from 'rxjs';
import { UpdateeventmodalComponent } from './updateeventmodal/updateeventmodal.component';
import { DeleteeventmodalComponent } from './deleteeventmodal/deleteeventmodal.component';

export interface EntertainmentElement {
  id : number;
  name: string;
  price: number;
  image: string;
  address: string;
  latitude:string;
  longitude:string;
  type:string;
  startDate:string;
  endDate:string;
  desc:string;
  tc:string;
}

@Component({
  selector: 'app-manageevent',
  templateUrl: './manageevent.component.html',
  styleUrls: ['./manageevent.component.scss']
})
export class ManageeventComponent implements OnInit {

  displayedColumns: string[] =
  ['image', 'name', 'address', 'endDate', 'button'];

  ELEMENT_DATA: EntertainmentElement[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  dataSource: any;

  entertainmentData : Entertainment[];
  entertainmentDat : Entertainment;
  locationData : Location[]
  locationDat : Location
  bestoffer : String;
  activity: String;
  attraction:number;
  event:String;

  loaded:Boolean = false

  entertainment:any


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEntertainmentData(){

    this.service.getEntertainment().subscribe(async result=>{
      this.entertainmentData=result
      this.entertainmentData.forEach( async x => {
        await this.ELEMENT_DATA.push({
          "id" : x.entertainment_id,
          "name" : x.entertainment_name,
          "price" : x.entertainment_price,
          "image" : x.entertainment_image_path1,
          "address" : x.entertainment_address,
          "latitude":x.entertainment_latitude,
          "longitude":x.entertainment_longitude,
          "type":x.entertainment_type,
          "startDate":x.entertainment_start_date,
          "endDate":x.entertainment_end_date,
          "desc":x.entertainment_description,
          "tc":x.entertainment_t_c
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
    this.dialog.open(CreateeventmodalComponent)
  }

  openUpdate(entertainment : Entertainment){
    var config : MatDialogConfig = new MatDialogConfig()

    config.data = {
      entertainment : JSON.stringify(entertainment)
    }

    console.log(entertainment)

    this.dialog.open(UpdateeventmodalComponent, config)
  }

  openDelete(entertainment : Entertainment){
    var config : MatDialogConfig = new MatDialogConfig()
    config.data = {
      entertainment : JSON.stringify(entertainment)
    }
    this.dialog.open(DeleteeventmodalComponent, config)
  }

  constructor(private service:EntertainmentService, private dialog: MatDialog) {
    this.getEntertainmentData()
  }


  ngOnInit() {
  }

}
