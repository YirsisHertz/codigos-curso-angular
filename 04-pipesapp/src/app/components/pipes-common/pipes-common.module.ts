import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { TextoComponent } from './texto/texto.component';
import { NumerosComponent } from './numeros/numeros.component';
import { FechaComponent } from './fecha/fecha.component';
import { JsonComponent } from './json/json.component';
import { KeyValueComponent } from './key-value/key-value.component';
import { SliceComponent } from './slice/slice.component';
import { I18nSelectComponent } from './i18n-select/i18n-select.component';
import { I18nPluralComponent } from './i18n-plural/i18n-plural.component';
import { AsyncComponent } from './async/async.component';

@NgModule({
  declarations: [ContainerComponent, TextoComponent, NumerosComponent, FechaComponent, JsonComponent, KeyValueComponent, SliceComponent, I18nSelectComponent, I18nPluralComponent, AsyncComponent],
  imports: [CommonModule],
  exports: [ContainerComponent],
})
export class PipesCommonModule {}
