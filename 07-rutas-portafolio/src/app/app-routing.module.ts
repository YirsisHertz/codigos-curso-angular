import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./info/info.module').then((m) => m.InfoModule),
  },

  {
    path: 'proyectos',
    loadChildren: () =>
      import('./proyectos/proyectos.module').then((m) => m.ProyectosModule),
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
