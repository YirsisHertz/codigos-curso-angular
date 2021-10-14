import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactosService } from '../../shared/services/contactos.service';
import { Contacto } from '../../shared/interfaces/Contacto.interface';

@Component({
  selector: 'app-formulario-reac',
  templateUrl: './formulario-reac.component.html',
  styleUrls: ['./formulario-reac.component.scss'],
})
export class FormularioReacComponent implements OnInit {
  // formulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('yirsis'),
  //   correo: new FormControl('yirsis@mail.com'),
  //   edad: new FormControl(20),
  // });

  formulario: FormGroup = this.formBuilder.group({
    nombre: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(15)],
    ],
    correo: ['', [Validators.required, Validators.email]],
    edad: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private contactosService: ContactosService
  ) {}

  ngOnInit(): void {}

  getErrors(control: string) {
    return (
      this.formulario.controls[control].errors &&
      this.formulario.controls[control].touched
    );
  }

  guardarContacto() {
    if (this.formulario.invalid) {
      return;
    }

    const { nombre, correo, edad } = this.formulario.value;

    const nuevoContacto: Contacto = {
      nombre,
      correo,
      edad,
    };

    this.contactosService.contactos.push(nuevoContacto);

    this.contactosService.guardarContactos();

    this.formulario.reset({
      edad: 0,
    });
  }
}
