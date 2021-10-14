import { TareasService } from './tareas.service';

describe('TareaService', () => {
  let service: TareasService;

  beforeEach(() => {
    service = new TareasService();
  });

  it('ToBe: deberia verificar que mi servicio inicie en 4 tareas', () => {
    expect(service.tareas.length).toBe(4);
  });

  it('Delete: deberia borrar una tarea Barrer', () => {
    service.deleteTarea('Barrer');

    expect(service.tareas.length).toBe(3);
  });

  it('No Delete: No deberia borrar una tarea que no existe', () => {
    service.deleteTarea('abcd');

    expect(service.tareas.length).toBe(4);
  });

  it('Spy: deberia llamar la funcion completar una sola vez', () => {
    const espia = jasmine.createSpyObj('TareasService', ['completeTarea']);

    espia.completeTarea();

    expect(espia.completeTarea.calls.count()).toBe(1);
  });
});
