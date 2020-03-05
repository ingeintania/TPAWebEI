import { Component, OnInit, Inject } from '@angular/core';
import { Hotel } from 'src/app/model/Hotel';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-deletehotelmodal',
  templateUrl: './deletehotelmodal.component.html',
  styleUrls: ['./deletehotelmodal.component.scss']
})
export class DeletehotelmodalComponent implements OnInit {
  hotelData : Hotel[];
  hotelDat : Hotel;
  hotel : any

  hId : number
  hName : String

  constructor(private matdialogRef : MatDialogRef<DeletehotelmodalComponent>, private service:HotelService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

    deleteData(){
      console.log(this.hId)

      this.service.deletehotel(this.hId).subscribe(async result=>{
          this.hotelData=result
        })
      alert("Success Delete!")
    }

  ngOnInit() {
    this.hotel = JSON.parse(this.data.hotel)
    console.log(this.hotel.name)
    this.hId = this.hotel.id
    this.hName = this.hotel.name
  }

}
