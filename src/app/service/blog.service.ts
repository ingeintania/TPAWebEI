import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Blog } from '../model/Blog';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private apollo: Apollo) { }

  getBlog(): Observable<Blog[]>{
    return this.apollo.query<any>({
      query: gql`
      query{
        blogs{
          blog_id
          blog_image_path
          blog_title
          blog_content
          blog_viewers
          blog_category
          blog_writer
        }
      }
      `,
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.blogs
    ))
  }

  createblog1(
    image_path:String,
    title:String,
    content:String,
    viewers:number,
    category:String,
    writer:String
  ): Observable<Blog[]>{
    return this.apollo.mutate<any>({
      mutation: gql`
      mutation($image_path:String,
        $title:String, $content:String,
        $viewers:Int, $category:String,
        $writer:String){
        createblog(blog_image_path:$image_path,
        blog_title:$title, blog_content:$content,
        blog_viewers:$viewers, blog_category:$category,
        blog_writer:$writer){
          blog_id
          blog_image_path
          blog_title
          blog_content
          blog_viewers
          blog_category
          blog_writer
        }
      }
      `,
      variables:{
        "image_path": image_path,
        "title": title,
        "content": content,
        "viewers": viewers,
        "category": category,
        "writer": writer,
      },
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.createblog
    ))
  }

  updateeblog(
    id:number,
    image_path:String,
    title:String,
    content:String,
    viewers:number,
    category:String,
    writer:String
  ): Observable<Blog[]>{
    return this.apollo.mutate<any>({
      mutation: gql`
      mutation($id:Int, $image_path:String,
        $title:String, $content:String,
        $viewers:Int, $category:String,
        $writer:String){
        updateblog(blog_id:$id, blog_image_path:$image_path,
        blog_title:$title, blog_content:$content,
        blog_viewers:$viewers, blog_category:$category,
        blog_writer:$writer){
          blog_id
          blog_image_path
          blog_title
          blog_content
          blog_viewers
          blog_category
          blog_writer
        }
      }
      `,
      variables:{
        "id":id,
        "image_path": image_path,
        "title": title,
        "content": content,
        "viewers": viewers,
        "category": category,
        "writer": writer,
      },
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.updateblog
    ))
  }

  deleteblog(
    id:number,
  ): Observable<Blog[]>{
    return this.apollo.mutate<any>({
      mutation: gql`
      mutation($id:Int){
        deleteblog(blog_id:$id){
          blog_id
          blog_image_path
          blog_title
          blog_category
          blog_content
          blog_writer
        }
      }
      `,
      variables:{
        "id":id,
      },
      fetchPolicy:'no-cache'
    }).pipe(map(
      result => result.data.deleteblog
    ))
  }



}
