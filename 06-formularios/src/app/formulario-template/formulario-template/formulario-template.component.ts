import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css'],
})
export class FormularioTemplateComponent implements OnInit {
  @ViewChild('miFormulario')
  miFormulario!: NgForm;

  initialState = {
    proyecto: '',
    horas: 0,
    tecnologia: '',
  };

  tecnologias: Array<string> = [];
  proyectos: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  agregar() {
    if (this.miFormulario.invalid) {
      return;
    }

    this.proyectos.push({
      proyecto: this.miFormulario.controls['proyecto'].value,
      horas: this.miFormulario.controls['horas'].value,
      tecnologias: this.tecnologias,
    });

    this.miFormulario.resetForm();
    this.tecnologias = [];
  }

  agregarTec() {
    if (this.miFormulario.controls['tecnologia'].invalid) {
      return;
    }

    this.tecnologias.push(this.miFormulario.controls['tecnologia'].value);

    this.miFormulario.resetForm({
      ...this.miFormulario.value,
      tecnologia: '',
    });
  }
}
