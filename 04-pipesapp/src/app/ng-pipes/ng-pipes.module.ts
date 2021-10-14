import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiPipesComponent } from './multi-pipes/multi-pipes.component';
import { DataComponent } from './data/data.component';
import { ColectionsComponent } from './colections/colections.component';
import { DinamicImgComponent } from './dinamic-img/dinamic-img.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    MultiPipesComponent,
    DataComponent,
    ColectionsComponent,
    DinamicImgComponent,
    LoadingComponent,
  ],
  imports: [CommonModule],
  exports: [
    MultiPipesComponent,
    DataComponent,
    ColectionsComponent,
    DinamicImgComponent,
  ],
})
export class NgPipesModule {}
