import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { v4 as uuid } from 'uuid';

import { Proyecto } from '../../shared/interfaces/proyecto.interface';
import { Tecnologia } from '../../shared/interfaces/tecnologia.interface';

@Component({
  selector: 'app-templates-forms',
  templateUrl: './templates-forms.component.html',
  styleUrls: ['./templates-forms.component.css'],
})
export class TemplatesFormsComponent implements OnInit {
  @ViewChild('miFormulario')
  miFormulario!: NgForm;

  proyectoInitialState = {
    proyecto: '',
    tecnologia: '',
  };

  tecnologias: Tecnologia[] = [];

  proyectos: Proyecto[] = [];

  constructor() {}

  ngOnInit(): void {}

  agregarProyecto() {
    const nuevoProyecto: Proyecto = {
      id: uuid(),
      nombre: this.proyectoInitialState.proyecto,
      tecnologias: this.tecnologias,
    };

    this.proyectos.push(nuevoProyecto);

    this.tecnologias = [];

    this.miFormulario.resetForm({
      proyecto: '',
      tecnologia: '',
    });
  }

  agregarTecnologia() {
    this.tecnologias.push({ nombre: this.proyectoInitialState.tecnologia });

    this.miFormulario.resetForm({
      ...this.proyectoInitialState,
      tecnologia: '',
    });
  }

  mensajeError() {
    return (
      this.miFormulario?.controls['proyecto']?.errors &&
      this.miFormulario?.controls['proyecto']?.touched
    );
  }
}
