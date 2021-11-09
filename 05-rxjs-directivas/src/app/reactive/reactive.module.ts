import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveContainerComponent } from './reactive-container/reactive-container.component';
import { AreaMouseDirective } from './directives/area-mouse.directive';

@NgModule({
  declarations: [ReactiveContainerComponent, AreaMouseDirective],
  imports: [CommonModule],
  exports: [ReactiveContainerComponent],
})
export class ReactiveModule {}
