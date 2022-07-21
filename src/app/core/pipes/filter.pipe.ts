import { Card } from './../models/courses';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(array: Card[], text: string): Card[] {
    if(!array || !text) {
      return array;
    }
    return array.filter(item => item.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
  }

}
