import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtituloComponent } from './subtitulo/subtitulo.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';
import { GridComponent } from './grid/grid.component';
import { TareasService } from './services/tareas.service';

@NgModule({
  declarations: [SubtituloComponent, ListadoTareasComponent, GridComponent],
  imports: [CommonModule],
  exports: [GridComponent],
  providers: [TareasService],
})
export class TareasModule {}
