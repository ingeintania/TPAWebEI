
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { BlogService } from 'src/app/service/blog.service';
import { Blog } from 'src/app/model/Blog';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.scss']
})
export class BlogdetailComponent implements OnInit {
  blog : Blog
  blog_id;
  sub;
  blogWe:Blog[]
  blogS:Blog[]
  blogW:any

  blogData : Blog[]


  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router, private service:BlogService) { }

    getBlogData(){
      this.service.getBlog().subscribe(async result=>{
        this.blogData=result
        // this.test()
        // this.setData()
      })
    }

  ngOnInit() {
    this.getBlogData()
    this.sub=this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
       this.blog_id = params.get('blog_id')
       console.log(this.blog_id)
       console.log("geeeeeeeeeeee")
   });

  this.service.getBlog().subscribe(async result=>{
      this.blog=result.find(p => p.blog_id==this.blog_id);
      console.log(this.blog)
      // this.blogWe=this.blogWe.filter(Blog =>this.blog.blog_id == this.blog_id)
      console.log(this.blog)
    })
    console.log(this.blog_id)


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
     this._router.navigate(['blog']);
  }

}
