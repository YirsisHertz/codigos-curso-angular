import { TemperatureValues } from '../enums/temperature.enum';
import { TemperaturePipe } from './temperature.pipe';

describe('TemperaturePipe', () => {
  it('create an instance', () => {
    const pipe = new TemperaturePipe();
    expect(pipe).toBeTruthy();
  });

  it('deberia retornar grados C si mando grados C', () => {
    const pipe = new TemperaturePipe();

    expect(pipe.transform(12, TemperatureValues.C)).toEqual('12 °C');
  });

  it('deberia retornar grados F si mando grados F', () => {
    const pipe = new TemperaturePipe();

    expect(pipe.transform(12, TemperatureValues.F)).toEqual('53.6 °F');
  });
});
