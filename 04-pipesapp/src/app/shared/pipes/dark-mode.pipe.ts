import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'darkmode',
})
export class DarkModePipe implements PipeTransform {
  transform(value: boolean) {
    return value ? 'bg-dark text-white' : 'bg-white text-dark';
  }
}
