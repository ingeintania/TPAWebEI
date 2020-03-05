import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/User';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {
  userData : User[];

  id : number = 2
  email : string
  phone : string
  gender : string = "female"
  firstname : string
  lastname : string
  city : string = "Jakarta"
  address : string
  post_code : string
  password : string
  language : string

  i : number = 0

  validateField(){
    if(!this.address.startsWith('Jl.')){
      alert("Alamat harus diawali dengan 'Jl.'!")
    }
  }

  getUserData(){
    this.service.getUser('iing@iing.iing').subscribe(async result=> {
      this.userData=result
    })
  }

  updateData(){
    if(this.id==null || this.email==null || this.phone==null ||
      this.gender==null || this.firstname==null || this.lastname==null||
      this.city==null || this.address==null || this.post_code==null || this.password==null ||
      this.language==null){
        alert("All field must be filled!")
      }else{
        console.log(this.phone)
        this.checkPhone(this.phone)
        this.service.updateuser(this.id, this.email, this.phone,
          this.gender, this.firstname, this.lastname, this.city,
          this.address, this.post_code, this.password, this.language).subscribe(async result=>{
            await (this.userData=result)
          })
          alert("Success Update Data!")
      }
  }

  // set endpoint and your access key

  // verify phone number via AJAX call
  checkPhone(phoneNumber:string){
      var access_key = '7b862ccb0ab7374b5b56152305168aa2';
      var phone_number = phoneNumber;
      $.ajax({
        url: 'http://apilayer.net/api/validate?access_key=' + access_key + '&number=62' + phone_number,
        dataType: 'jsonp',
        success: function(json) {

        // Access and use your preferred validation result objects
        console.log(json.valid);
        console.log(json.country_code);
        console.log(json.carrier);

        }
    });
  }

  constructor(private service:UserService) {
    this.getUserData()

  }

  ngOnInit() {
  }

}
