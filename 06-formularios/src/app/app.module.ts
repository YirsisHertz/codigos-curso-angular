import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioReactivosModule } from './formulario-reactivos/formulario-reactivos.module';
import { FormularioTemplateModule } from './formulario-template/formulario-template.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormularioTemplateModule, FormularioReactivosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
