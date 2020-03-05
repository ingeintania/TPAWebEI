import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/model/Blog';
import { BlogService } from 'src/app/service/blog.service';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-createblogmodal',
  templateUrl: './createblogmodal.component.html',
  styleUrls: ['./createblogmodal.component.scss']
})
export class CreateblogmodalComponent implements OnInit {
  blogData : Blog[];
  blogDat : Blog;

  bId : number
  bImagePath : String
  bTitle : String
  bContent : String
  bViewers : number
  bCategory : String
  bWriter : String


  constructor(private service : BlogService, private serviceNotify : ChatService) { }

  ngOnInit() {
  }

  insertData(){
    // console.log(this.bId)
    console.log(this.bImagePath)
    if(this.bImagePath==null||this.bTitle==null||this.bContent==null||
      this.bViewers==null||this.bCategory==null||this.bWriter==null){
        alert("All form must be filled!")
    }else{

      this.service.createblog1(this.bImagePath, this.bTitle,
        this.bContent, this.bViewers,
        this.bCategory, this.bWriter).subscribe(async result=>{
          this.blogData=result
          this.serviceNotify.emit('blog', 'New Blog has been added!')

        })
      alert("Success Insert!")
    }
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
