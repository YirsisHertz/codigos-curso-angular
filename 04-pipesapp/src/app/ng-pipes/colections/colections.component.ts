import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-colections',
  templateUrl: './colections.component.html',
  styleUrls: ['./colections.component.css'],
})
export class ColectionsComponent {
  @Input()
  persona = { genero: '' };

  personas = ['Paola', 'Juan', 'Raul', 'Maria', 'Fernanda', 'Melisa'];

  genero = { h: 'Bienvenido', m: 'Bienvenida' };

  mensajes = 0;

  mensajesOpt = {
    '=0': 'no tienes mensajes',
    '=1': 'tienes 1 mensaje',
    other: 'tienes # mensajes',
  };

  aumentar() {
    this.mensajes++;
  }
}
