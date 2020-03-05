import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nearestDataFilter'
})
export class NearestDataFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
