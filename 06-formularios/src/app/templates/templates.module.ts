import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesFormsComponent } from './templates-forms/templates-forms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TemplatesFormsComponent],
  imports: [CommonModule, FormsModule],
  exports: [TemplatesFormsComponent],
})
export class TemplatesModule {}
