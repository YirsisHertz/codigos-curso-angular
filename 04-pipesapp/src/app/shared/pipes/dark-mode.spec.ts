import { DarkModePipe } from './dark-mode.pipe';

describe('DarkModePipe', () => {
  it('deberia retornar DarkMode si mando true', () => {
    const pipe = new DarkModePipe();

    expect(pipe.transform(true)).toEqual('bg-dark text-white');
  });

  it('deberia retornar LightMode si mando false', () => {
    const pipe = new DarkModePipe();

    expect(pipe.transform(false)).toEqual('bg-white text-dark');
  });
});
