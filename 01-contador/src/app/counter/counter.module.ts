import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterComponent } from './counter.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonDisComponent } from './button-dis/button-dis.component';

@NgModule({
  declarations: [CounterComponent, ButtonAddComponent, ButtonDisComponent],
  imports: [CommonModule],
  exports: [CounterComponent],
})
export class CounterModule {}
