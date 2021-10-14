import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgPipesModule } from './ng-pipes/ng-pipes.module';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { DarkModePipe } from './pipes/darkMode.pipe';

@NgModule({
  declarations: [AppComponent, TemperaturePipe, DarkModePipe],
  imports: [BrowserModule, NgPipesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
