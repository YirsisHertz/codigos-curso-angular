import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GridComponent } from './grid/grid.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [GridComponent, NavbarComponent, CardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [GridComponent],
})
export class PokeModule {}
