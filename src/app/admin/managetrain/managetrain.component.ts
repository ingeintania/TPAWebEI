import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatDialog, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { Train } from 'src/app/model/Train';
import { TrainService } from 'src/app/service/train.service';
import { CreatetrainmodalComponent } from './createtrainmodal/createtrainmodal.component';
import { UpdatetrainmodalComponent } from './updatetrainmodal/updatetrainmodal.component';
import { DeletetrainmodalComponent } from './deletetrainmodal/deletetrainmodal.component';

export interface TrainElement {
  id : number;
  name: string;
  classes: string;
  type: string;
  depart_time: string;
  depart_location: string;
  arrive_time: string;
  arrive_location:string;
  duration:number;
  detail_price:number;
}

@Component({
  selector: 'app-managetrain',
  templateUrl: './managetrain.component.html',
  styleUrls: ['./managetrain.component.scss']
})
export class ManagetrainComponent implements OnInit {

  displayedColumns: string[] =
  ['name', 'depart_time', 'arrive_time', 'classes', 'type',
  'button'];
  dataSource: any;

  ELEMENT_DATA: TrainElement[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  trainData : Train[]
  trainDat : Train

  loaded:Boolean = false

  train : any

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getTrainData(){
    this.service.getTrains().subscribe(async result=>{
      this.trainData=result
      this.trainData.forEach( async x => {
        await this.ELEMENT_DATA.push({
          "id" : x.train_id,
          "name" : x.train_name,
          "classes" : x.train_class,
          "type" : x.train_type,
          "depart_time" : x.train_depart_time,
          "depart_location" : x.train_depart_location,
          "arrive_time" : x.train_arrive_time,
          "arrive_location" : x.train_arrive_location,
          "duration" :x.train_duration,
          "detail_price":x.train_detail_price
        });
      });
      console.log(this.ELEMENT_DATA);
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    })
    setTimeout(() => {
      this.loaded = true
    }, 3000)
  }

  openCreate(){
    this.dialog.open(CreatetrainmodalComponent)
  }

  openUpdate(train : Train){
    var config : MatDialogConfig = new MatDialogConfig()

    config.data = {
      train : JSON.stringify(train)
    }

    console.log(train)

    this.dialog.open(UpdatetrainmodalComponent, config)
  }

  openDelete(train : Train){
    var config : MatDialogConfig = new MatDialogConfig()
    config.data = {
      train : JSON.stringify(train)
    }
    this.dialog.open(DeletetrainmodalComponent, config)
  }

  constructor(private service:TrainService, private dialog: MatDialog) {
    this.getTrainData()
   }

  ngOnInit() {
  }

}
