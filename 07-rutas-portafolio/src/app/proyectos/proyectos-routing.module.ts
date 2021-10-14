import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':proyecto',
        component: ProyectoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectosRoutingModule {}
