import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';

@NgModule({
  declarations: [ContactoComponent],
  imports: [CommonModule, ContactoRoutingModule],
})
export class ContactoModule {}
