import { Component, OnInit, Inject } from '@angular/core';
import { Blog } from 'src/app/model/Blog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-deleteblogmodal',
  templateUrl: './deleteblogmodal.component.html',
  styleUrls: ['./deleteblogmodal.component.scss']
})
export class DeleteblogmodalComponent implements OnInit {
  blogData : Blog[];
  blogDat : Blog;

  blog:any
  bId : number
  bImagePath : String
  bTitle : String
  bContent : String
  bViewers : number
  bCategory : String
  bWriter : String

  constructor(private matdialogRef : MatDialogRef<DeleteblogmodalComponent>, private service:BlogService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

    deleteData(){
      console.log(this.bId)
      console.log(this.bImagePath)
      console.log(this.bTitle)
      console.log(this.bContent)
      console.log(this.bViewers)
      console.log(this.bCategory)
      console.log(this.bWriter)

      this.service.deleteblog(this.bId).subscribe(async result=>{
          await (this.blogData=result)
        })
      alert("Success Delete!")
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

  ngOnInit() {

    this.blog= JSON.parse(this.data.blog)
    console.log(this.blog.id)
    console.log(this.blog.image)
    console.log(this.blog.title)
    console.log(this.blog.content)
    console.log(this.blog.viewers)
    console.log(this.blog.category)
    console.log(this.blog.writer)

    this.bId = this.blog.id
    this.bImagePath = this.blog.image
    this.bTitle = this.blog.title
    this.bContent = this.blog.content
    this.bViewers = this.blog.viewers
    this.bCategory = this.blog.category
    this.bWriter = this.blog.writer
  }


}
