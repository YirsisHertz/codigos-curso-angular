import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioTemplateModule } from './formulario-template/formulario-template.module';
import { FormularioReactiveModule } from './formulario-reactive/formulario-reactive.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormularioTemplateModule, FormularioReactiveModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
