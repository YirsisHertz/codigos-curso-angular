import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AboutComponent } from './pages/about/about.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactoComponent,
    AboutComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
