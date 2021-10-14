import { Component } from '@angular/core';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-subtitulo',
  templateUrl: './subtitulo.component.html',
})
export class SubtituloComponent {
  constructor(private tareasService: TareasService) {}

  get tareas() {
    return this.tareasService.tareas.length;
  }
}
