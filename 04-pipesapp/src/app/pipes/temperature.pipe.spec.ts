import { TemperaturePipe } from './temperature.pipe';

describe('TemperaturePipe', () => {
  it('create an instance', () => {
    const pipe = new TemperaturePipe();
    expect(pipe).toBeTruthy();
  });

  it('deberia retornar 15 grados C', () => {
    const pipe = new TemperaturePipe();

    expect(pipe.transform(15)).toEqual('15 °C');
    expect(pipe.transform(15, 'c')).toEqual('15 °C');
    expect(pipe.transform(15, 'C')).toEqual('15 °C');
  });

  it('deberia retornar 59 grados F si mando 15 C', () => {
    const pipe = new TemperaturePipe();

    expect(pipe.transform(15, 'f')).toEqual('59 °F');
    expect(pipe.transform(15, 'F')).toEqual('59 °F');
  });

  it('deberia disparar una exception si el valor no es C o F', () => {
    const pipe = new TemperaturePipe();

    expect(() => pipe.transform(0, 's')).toThrowError('Valor no contemplado');
  });
});
