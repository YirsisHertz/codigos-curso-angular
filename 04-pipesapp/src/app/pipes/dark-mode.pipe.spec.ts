import { DarkModePipe } from './darkMode.pipe';

describe('DarkModePipe', () => {
  it('deberia retornar modo oscuro si es true', () => {
    const pipe = new DarkModePipe();

    expect(pipe.transform(true)).toEqual('text-white bg-dark');
  });

  it('deberia retornar modo claro si es false', () => {
    const pipe = new DarkModePipe();

    expect(pipe.transform(false)).toEqual('text-dark bg-light');
  });
});
