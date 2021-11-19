import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioTemplateComponent } from './formulario-template/formulario-template.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormularioTemplateComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormularioTemplateComponent],
})
export class FormularioTemplateModule {}
