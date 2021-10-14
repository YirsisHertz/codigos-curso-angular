import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';


@NgModule({
  declarations: [
    ProyectoComponent
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule
  ]
})
export class ProyectosModule { }
