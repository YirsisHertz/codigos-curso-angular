import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioReactiveComponent } from './formulario-reactive/formulario-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormularioReactiveComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormularioReactiveComponent],
})
export class FormularioReactiveModule {}
