import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChatService } from '../service/chat.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ZommedimageComponent } from './zommedimage/zommedimage.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messageControl = new FormControl();
  fileControl = new FormControl();
  messageLists: Array<any> = [];

  filename : any
  data : any

  constructor(private chatService : ChatService, private dialog: MatDialog) { 
    
  }

  sendMessage() {
    if(this.messageControl.value == null){
      alert("You cannot send empty message")
    }
    this.chatService.emit('chat', this.messageControl.value);
    this.messageControl.setValue("");
  }

  sendFile() {
    if(this.fileControl.value == null){
      alert("You cannot send empty file")
    }
    console.log(this.fileControl.value)
    this.filename = this.fileControl.value.split("\\")
    this.data = "../../assets/"+this.filename[this.filename.length-1]
    console.log(this.data)
    const chatData = {
      data: this.data,
      // sender : 
    }
    this.chatService.emit('chat', this.data);
    this.fileControl.setValue("");
  }

  openImage(source : any){
    console.log(source)
    
    var config : MatDialogConfig = new MatDialogConfig()

    config.data = {
      source : JSON.stringify(source)
    }

    console.log(source)

    this.dialog.open(ZommedimageComponent, config)
  }

  ngOnInit() {
    this.chatService.listen('chat').subscribe(m => {
      this.messageLists.push(m);
    });
  }

}
