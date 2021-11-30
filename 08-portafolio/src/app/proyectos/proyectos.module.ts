import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './proyectos.component';
import { InformacionComponent } from './informacion/informacion.component';

@NgModule({
  declarations: [ProyectosComponent, InformacionComponent],
  imports: [CommonModule, ProyectosRoutingModule, RouterModule],
})
export class ProyectosModule {}
