import { Pipe, PipeTransform } from '@angular/core';
import { TemperatureValues } from '../enums/temperature.enum';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, tipo: TemperatureValues) {
    let finalValue = value;

    if (tipo === TemperatureValues.F) {
      finalValue = value * (9 / 5) + 32;
    }

    return `${finalValue} °${tipo}`;
  }
}
