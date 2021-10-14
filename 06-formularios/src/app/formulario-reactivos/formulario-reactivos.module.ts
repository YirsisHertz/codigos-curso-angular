import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactosComponent } from './contactos/contactos.component';
import { FormularioReacComponent } from './formulario-reac/formulario-reac.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';

@NgModule({
  declarations: [
    ContactosComponent,
    FormularioReacComponent,
    ListaContactosComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ContactosComponent],
})
export class FormularioReactivosModule {}
