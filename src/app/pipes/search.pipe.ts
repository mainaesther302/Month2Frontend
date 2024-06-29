import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchItems: string[]): any[] {
    if (searchItems.length === 0) {
      return value;
    }
    let filteredArray = [];
    for (let tour of value) {
      for (let item of searchItems) {
        if (tour.name.includes(item) || tour.description.includes(item)) {
          filteredArray.push(tour);
          break;
        }
      }
    }
    return filteredArray;
  }
}

