import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesCommonModule } from './components/pipes-common/pipes-common.module';
import { CustomPipesModule } from './components/custom-pipes/custom-pipes.module';
import { DarkModePipe } from './shared/pipes/dark-mode.pipe';

@NgModule({
  declarations: [AppComponent, DarkModePipe],
  imports: [BrowserModule, PipesCommonModule, CustomPipesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
