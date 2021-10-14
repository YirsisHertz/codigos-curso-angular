import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from '../../../shared/interfaces/Proyecto.interface';
import { proyectos } from '../../../shared/data/proyectos.data';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css'],
})
export class ProyectoComponent implements OnInit {
  proyecto: Proyecto = {
    descripcion: '',
    img: '',
    nombre: '',
    tecnologias: [],
    url: '',
  };

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.proyecto = proyectos.find(
        (proyecto) => proyecto.nombre === params.proyecto
      )!;
    });
  }
}
