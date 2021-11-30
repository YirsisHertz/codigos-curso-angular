import { Injectable } from '@angular/core';
import { proyectos } from 'src/app/shared/data/Proyectos.data';

@Injectable({
  providedIn: 'root',
})
export class ProyectosDataService {
  private _data = proyectos;

  constructor() {}

  get data() {
    return this._data;
  }

  getProyecto(nombre: string) {
    let proyecto = this._data.filter((proyecto) => proyecto.nombre === nombre);

    return proyecto[0];
  }
}
