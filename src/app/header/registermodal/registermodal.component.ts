import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {MatIconRegistry} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-registermodal',
  templateUrl: './registermodal.component.html',
  styleUrls: ['./registermodal.component.scss']
})
export class RegistermodalComponent implements OnInit {
  userData : User[];

  id : number
  email : string
  phone : string
  gender : string
  firstname : string
  lastname : string
  city : string
  address : string
  post_code : string
  password : string

  constructor(private dialogref : MatDialogRef<RegistermodalComponent>, private service:UserService) { }

  // myFunction() {
  //   var x = document.getElementById("myInput");
  //   if (x.typ === "password") {
  //     x.type = "text";
  //   } else {
  //     x.type = "password";
  //   }
  // }

  insertData(){
    console.log(this.firstname)
    console.log(this.lastname)
    console.log(this.email)
    console.log(this.phone)
    console.log(this.gender)
    console.log(this.city)
    console.log(this.address)
    console.log(this.post_code)
    console.log(this.password)
    if(this.firstname==null || this.lastname==null|| this.email==null || this.phone==null ||
      this.gender==null ||
      this.city==null || this.address==null || this.post_code==null || this.password==null){
        alert("All field must be filled!")
      }else{

        this.service.createuser(this.email, this.phone,
          this.gender, this.firstname, this.lastname, this.city,
          this.address, this.post_code, this.password, "").subscribe(async result=>{
            await (this.userData=result)
          })
          alert("Success Update Data!")
      }
  }

  closeDialog(){
    // alert("HALO")
    this.dialogref.close()
  }

  ngOnInit() {
  }

}
