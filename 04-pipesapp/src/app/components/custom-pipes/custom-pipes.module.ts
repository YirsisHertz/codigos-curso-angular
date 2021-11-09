import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomContainerComponent } from './custom-container/custom-container.component';
import { TemperaturePipe } from '../../shared/pipes/temperature.pipe';

@NgModule({
  declarations: [CustomContainerComponent, TemperaturePipe],
  imports: [CommonModule],
  exports: [CustomContainerComponent],
})
export class CustomPipesModule {}
