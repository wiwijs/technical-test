import {Pipe, PipeTransform} from '@angular/core';
import {ProductInterface} from "../interfaces";

@Pipe({
  name: 'tableFilter'
})
export class FilterPipe implements PipeTransform {

  transform(list: ProductInterface[], value: string) {
    // If there's a value passed (male or female) it will filter the list otherwise it will return the original unfiltered list.
    return value ? list.filter(item => JSON.stringify(item).toLowerCase().includes(value.toString().toLowerCase())) : list;
  }
}
