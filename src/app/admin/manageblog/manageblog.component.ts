import { Component, OnInit, ViewChild } from '@angular/core';
import { Blog } from 'src/app/model/Blog';
import { BlogService } from 'src/app/service/blog.service';
import { MatDialog, MatDialogConfig, MatTableDataSource, MatPaginator } from '@angular/material';
import { CreateblogmodalComponent } from './createblogmodal/createblogmodal.component';
import { UpdateblogmodalComponent } from './updateblogmodal/updateblogmodal.component';
import { DeleteblogmodalComponent } from './deleteblogmodal/deleteblogmodal.component';
import { async } from '@angular/core/testing';

export interface BlogElement {
  id : number;
  image: string;
  title: string;
  content: string;
  viewers: number;
  category: string;
  writer:string
}

@Component({
  selector: 'app-manageblog',
  templateUrl: './manageblog.component.html',
  styleUrls: ['./manageblog.component.scss']
})
export class ManageblogComponent implements OnInit {

  displayedColumns: string[] = ['image', 'title', 'category', 'content', 'button'];
  dataSource: any;


  ELEMENT_DATA: BlogElement[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  blogData : Blog[];
  blogDat : Blog;

  loaded:Boolean = false

  blog:any

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getBlogData(){
    this.service.getBlog().subscribe(async result=>{
      this.blogData=result
      this.blogData.forEach( async x => {
        await this.ELEMENT_DATA.push({
          "id" : x.blog_id,
          "image" : x.blog_image_path,
          "title" : x.blog_title,
          "content" : x.blog_content,
          "viewers" : x.blog_viewers,
          "category" : x.blog_category,
          "writer" : x.blog_writer
        });
      });
      console.log(this.ELEMENT_DATA);
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    })
    setTimeout(() => {
      this.loaded = true
    }, 2000)
  }

  openCreate(){
    this.dialog.open(CreateblogmodalComponent)
  }

  openUpdate(blog : Blog){
    var config : MatDialogConfig = new MatDialogConfig()

    config.data = {
      blog : JSON.stringify(blog)
    }

    console.log(blog)

    this.dialog.open(UpdateblogmodalComponent, config)
  }

  openDelete(blog : Blog){
    var config : MatDialogConfig = new MatDialogConfig()
    config.data = {
      blog : JSON.stringify(blog)
    }
    this.dialog.open(DeleteblogmodalComponent, config)
  }

  constructor(private service:BlogService, private dialog: MatDialog) {
    this.getBlogData()
  }


  ngOnInit() {

  }

}


