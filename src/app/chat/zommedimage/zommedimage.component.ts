import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-zommedimage',
  templateUrl: './zommedimage.component.html',
  styleUrls: ['./zommedimage.component.scss']
})
export class ZommedimageComponent implements OnInit {

  source : any

  direc : string

  constructor(private matdialogRef : MatDialogRef<ZommedimageComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
    this.source = JSON.parse(this.data.source)
    console.log(this.source)

    this.direc = this.source
  }

}
