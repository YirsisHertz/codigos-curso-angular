import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReativeFormsComponent } from './reative-forms/reative-forms.component';

@NgModule({
  declarations: [ReativeFormsComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ReativeFormsComponent],
})
export class ReactivesModule {}
