import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'darkmode',
})
export class DarkModePipe implements PipeTransform {
  transform(value: boolean) {
    return value ? 'text-white bg-dark' : 'text-dark bg-light';
  }
}
