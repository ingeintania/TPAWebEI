import { Pipe, PipeTransform } from '@angular/core';
import { Blog } from '../model/Blog';

@Pipe({
  name: 'blogFilter'
})
export class BlogFilterPipe implements PipeTransform {

  transform(
    blogData : Blog[],
    ): Blog[] {
    return blogData.sort((a,b) => a.blog_viewers > b.blog_viewers ? -1 : 1)
  }

}
