import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormularioTemComponent } from './formulario-tem/formulario-tem.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosComponent } from './contactos/contactos.component';

@NgModule({
  declarations: [
    FormularioTemComponent,
    ListaContactosComponent,
    ContactosComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [ContactosComponent, ListaContactosComponent],
})
export class FormularioTemplateModule {}
