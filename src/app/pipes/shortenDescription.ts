import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenDescription'
})
export class ShortenDescription implements PipeTransform {
  transform(value: string, limit: number = 100): string {
    if (value.length > limit) {
      return value.substring(0, limit) + '...';
    }
    return value;
  }
}
