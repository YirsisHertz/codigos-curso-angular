import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextContentDirective } from './directives/text-content.directive';
import { AreaMouseDirective } from './directives/area-mouse.directive';
import { TextDataDirective } from './directives/text-data.directive';

@NgModule({
  declarations: [AppComponent, TextContentDirective, AreaMouseDirective, TextDataDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
