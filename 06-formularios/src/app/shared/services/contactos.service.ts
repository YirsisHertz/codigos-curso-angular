import { Injectable } from '@angular/core';
import { Contacto } from '../interfaces/Contacto.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactosService {
  contactos: Array<Contacto>;

  constructor() {
    const lsContactos = localStorage.getItem('contactos')!;

    this.contactos = JSON.parse(lsContactos) || [];
  }

  guardarContactos() {
    localStorage.setItem('contactos', JSON.stringify(this.contactos));
  }
}
