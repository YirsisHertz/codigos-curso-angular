import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../shared/interfaces/Proyecto.interface';

import { proyectos } from '../../../shared/data/proyectos.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  proyectosData: Array<Proyecto>;

  constructor() {
    this.proyectosData = proyectos;
  }

  ngOnInit(): void {}
}
