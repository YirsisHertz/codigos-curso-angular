import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario-reactive',
  templateUrl: './formulario-reactive.component.html',
  styleUrls: ['./formulario-reactive.component.css'],
})
export class FormularioReactiveComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    proyecto: this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    horas: this.fb.control(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(50),
    ]),
    tecnologias: this.fb.array([], [Validators.required]),
  });

  tecnologia: FormControl = this.fb.control('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
  ]);

  proyectos: any[] = [];

  get tecnologias() {
    return this.miFormulario.get('tecnologias') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  validar() {
    return this.miFormulario.invalid && this.miFormulario.touched;
  }

  agregarTecnolgia() {
    if (this.tecnologia.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.tecnologias.push(this.fb.control(this.tecnologia.value));

    this.tecnologia.reset();
  }

  agregarProyecto() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.proyectos.push(this.miFormulario.value);

    this.miFormulario.reset();
    this.tecnologias.clear();
  }
}
