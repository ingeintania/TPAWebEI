import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../service/subscription.service';
import { Subscription } from '../model/Subscription';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  email:string
  subscriptionData : Subscription[]

  constructor(private service: SubscriptionService) { }

  subscribeEmail(){
    console.log(this.email)
    this.service.insertsubscription(this.email).subscribe(async result=>{
        this.subscriptionData=result

      })
  }

  ngOnInit() {
  }

}
