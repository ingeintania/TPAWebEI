import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/Blog';
import { BlogService } from '../service/blog.service';
import { MatDialogConfig } from '@angular/material';
import { ChatService } from '../service/chat.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogData : Blog[];
  blogssss : Blog[]

  blogK : Blog[]=[];


  from : number =0

  blog:any
  constructor(private service:BlogService, private serviceNotify:ChatService, private _Activatedroute:ActivatedRoute) {

   }

  setData(): void {
    if (this.from >= this.blogData.length) {
      return
    }
    let temp = this.blogData.slice(this.from, this.from + 4)
    console.log(temp)
    this.blogK.push(...temp)
    this.from += 4
  }

  test(){
    document.onscroll = function () {
      if (window.scrollY + window.innerHeight + window.innerHeight * 80 / 100 >= document.body.scrollHeight) {

        this.setData()
      }
    }.bind(this)
  }

  getBlogData(){
    this.service.getBlog().subscribe(async result=>{
      this.blogData=result
      this.test()
      this.setData()
    })
  }

  openDetail(blog : Blog){
    var config : MatDialogConfig = new MatDialogConfig()

    config.data = {
      blog : JSON.stringify(blog)
    }

    console.log(blog)
    // this.router.navigate(['/blog-detail'])
  }

  ngOnInit() {
    this.getBlogData()
    this.serviceNotify.listen('blog').subscribe(m => {
      alert(m.toString())
    });
    // alert("helppppppppp")
    // this.blogssss = this.blogData

  }

  onClick(cmd : any){
    // let cmd = btn.dataset['command'];
		if(cmd === 'createlink') {
			let url = prompt("Enter the link here: ", "http:\/\/");
			document.execCommand(cmd, false, url);
		} else {
			document.execCommand(cmd, false, null);
		}
  }

}
