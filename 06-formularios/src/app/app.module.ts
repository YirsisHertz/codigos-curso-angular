import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplatesModule } from './templates/templates.module';
import { ReactivesModule } from './reactives/reactives.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TemplatesModule, ReactivesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
