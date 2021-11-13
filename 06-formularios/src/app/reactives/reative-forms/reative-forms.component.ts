import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { v4 as uuid } from 'uuid';

import { Proyecto } from 'src/app/shared/interfaces/proyecto.interface';

@Component({
  selector: 'app-reative-forms',
  templateUrl: './reative-forms.component.html',
  styleUrls: ['./reative-forms.component.css'],
})
export class ReativeFormsComponent implements OnInit {
  proyectos: Proyecto[] = [];

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
    ],
    tecnologias: this.formBuilder.array([]),
  });

  nuevaTecnologia: FormControl = this.formBuilder.control('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  get tecnologias() {
    return this.miFormulario.controls['tecnologias'] as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  agregar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    const nuevoProyecto: Proyecto = {
      id: uuid(),
      ...this.miFormulario.value,
    };

    this.proyectos.push(nuevoProyecto);

    this.miFormulario.reset();
    this.tecnologias.clear();
  }

  agregarTecnologia() {
    if (this.nuevaTecnologia.invalid) return;

    this.tecnologias.push(
      this.formBuilder.control({ nombre: this.nuevaTecnologia.value }, [
        Validators.required,
      ])
    );

    this.nuevaTecnologia.reset();
  }

  validar() {
    return this.miFormulario.invalid && this.miFormulario.touched;
  }
}
