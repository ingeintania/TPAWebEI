import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatDialog, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { Aeroplane } from 'src/app/model/Aeroplane';
import { AeroplaneService } from 'src/app/service/aeroplane.service';
import { CreateaeroplanemodalComponent } from './createaeroplanemodal/createaeroplanemodal.component';
import { UpdateaeroplanemodalComponent } from './updateaeroplanemodal/updateaeroplanemodal.component';
import { DeleteaeroplanemodalComponent } from './deleteaeroplanemodal/deleteaeroplanemodal.component';

export interface AeroplaneElement {
  id: number
  name: string
  company: string
  type: string
  image_path: string
  depart_date: string
  depart_time: string
  arrive_date: string
  arrive_time: string
  duration: number
  price: number
  price_raw: number
  price_tax: number
  transit: string
  transit_duration: number
  facilities: string
  depart_location: string
  arrive_location: string
}

@Component({
  selector: 'app-manageaeroplane',
  templateUrl: './manageaeroplane.component.html',
  styleUrls: ['./manageaeroplane.component.scss']
})
export class ManageaeroplaneComponent implements OnInit {

  displayedColumns: string[] =
  ['image_path', 'company', 'name', 'depart_date',
  'arrive_date', 'depart_time', 'arrive_time',
  'duration', 'price', 'transit',
  'button'];
  dataSource: any;

  ELEMENT_DATA: AeroplaneElement[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  aeroplaneData : Aeroplane[]
  aeroplaneDat : Aeroplane

  loaded:Boolean = false

  aeroplane : any

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAeroplaneData(){
    this.service.getAeroplane().subscribe(async result=>{
      this.aeroplaneData=result
      this.aeroplaneData.forEach( async x => {
        await this.ELEMENT_DATA.push({
          "id" : x.aeroplane_id,
          "name" : x.aeroplane_name,
          "company":x.aeroplane_company,
          "type":x.aeroplane_type,
          "image_path":x.aeroplane_image_path,
          "depart_date":x.aeroplane_depart_date,
          "depart_time":x.aeroplane_depart_time,
          "arrive_date":x.aeroplane_arrive_date,
          "arrive_time":x.aeroplane_arrive_time,
          "duration":x.aeroplane_duration,
          "price":x.aeroplane_price,
          "price_raw":x.aeroplane_price_raw,
          "price_tax":x.aeroplane_price_tax,
          "transit":x.aeroplane_transit,
          "transit_duration":x.aeroplane_transit_duration,
          "facilities":x.aeroplane_facilities,
          "depart_location":x.aeroplane_depart_location,
          "arrive_location":x.aeroplane_arrive_location
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
    this.dialog.open(CreateaeroplanemodalComponent)
  }

  openUpdate(aeroplane : Aeroplane){
    var config : MatDialogConfig = new MatDialogConfig()

    config.data = {
      aeroplane : JSON.stringify(aeroplane)
    }

    console.log(aeroplane)

    this.dialog.open(UpdateaeroplanemodalComponent, config)
  }

  openDelete(aeroplane : Aeroplane){
    var config : MatDialogConfig = new MatDialogConfig()
    config.data = {
      aeroplane : JSON.stringify(aeroplane)
    }
    this.dialog.open(DeleteaeroplanemodalComponent, config)
  }

  constructor(private service:AeroplaneService, private dialog: MatDialog) {
    this.getAeroplaneData()
  }

  ngOnInit() {
  }

}
