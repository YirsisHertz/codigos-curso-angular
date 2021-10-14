import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactosService } from '../../shared/services/contactos.service';
import { Contacto } from '../../shared/interfaces/Contacto.interface';

@Component({
  selector: 'app-formulario-tem',
  templateUrl: './formulario-tem.component.html',
  styleUrls: ['./formulario-tem.component.scss'],
})
export class FormularioTemComponent implements OnInit {
  @ViewChild('formularioAgregar')
  formulario!: NgForm;

  initialState: Contacto = {
    nombre: '',
    correo: '',
    edad: 0,
  };

  constructor(private contactosService: ContactosService) {}

  ngOnInit(): void {}

  get contactos() {
    return this.contactosService.contactos;
  }

  validForm() {
    return this.formulario.valid;
  }

  guardarContacto() {
    if (!this.validForm()) {
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

    this.formulario.resetForm({
      edad: 0,
    });
  }
}
