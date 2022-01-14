import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTaskComponent } from './pages/main-task/main-task.component';
import { TaskUpdateComponent } from './pages/task-update/task-update.component';

const routes: Routes = [
  {
    path: '',
    component: MainTaskComponent,
  },
  {
    path: ':id/:nombre',
    component: TaskUpdateComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
