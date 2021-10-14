import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/shared/interfaces/Contacto.interface';
import { ContactosService } from '../../shared/services/contactos.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss'],
})
export class ListaContactosComponent implements OnInit {
  constructor(private contactosService: ContactosService) {}
  ngOnInit(): void {}

  get contactos(): Array<Contacto> {
    return this.contactosService.contactos;
  }
}
