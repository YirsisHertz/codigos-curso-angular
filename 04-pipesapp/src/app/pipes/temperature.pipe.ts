import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, tipo: string = 'c') {
    if (tipo.toLowerCase() === 'f' || tipo.toLowerCase() === 'c')
      return tipo.toLowerCase() === 'f'
        ? `${value * (9 / 5) + 32} °F`
        : `${value} °C`;
    else throw new Error('Valor no contemplado');
  }
}
