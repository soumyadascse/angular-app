// title-case.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'titleCase', standalone: true })

export class TitleCasePipe implements PipeTransform {
  transform(value: string): string {
    return value
      .toLowerCase()
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  }
}
