import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';

@Injectable()
export class TareasService {
  tareas: Array<Tarea> = [
    {
      tarea: 'Barrer',
      completada: false,
    },
    {
      tarea: 'Trapear',
      completada: false,
    },
    {
      tarea: 'Cocinar',
      completada: false,
    },
    {
      tarea: 'Leer',
      completada: false,
    },
  ];

  deleteTarea(nombreTarea: string) {
    this.tareas = this.tareas.filter((tarea) => tarea.tarea !== nombreTarea);
  }

  completeTarea(nombreTarea: string) {
    const tarea: Tarea = this.tareas.find((tarea) => {
      return tarea.tarea === nombreTarea;
    })!;

    tarea.completada = !tarea.completada;
  }
}
