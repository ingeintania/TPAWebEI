import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-registermodal',
  templateUrl: './registermodal.component.html',
  styleUrls: ['./registermodal.component.scss']
})
export class RegistermodalComponent implements OnInit {

  constructor(private dialogref : MatDialogRef<RegistermodalComponent>) { }

  closeDialog(){
    // alert("HALO")
    this.dialogref.close()
  }

  ngOnInit() {
  }

}
