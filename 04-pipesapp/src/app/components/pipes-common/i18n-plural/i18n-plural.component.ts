import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18n-plural',
  templateUrl: './i18n-plural.component.html',
  styleUrls: ['./i18n-plural.component.css'],
})
export class I18nPluralComponent implements OnInit {
  notificaciones = 0;

  mensaje = {
    '=0': 'No tienes ninguna notificacion',
    '=1': 'Tienes # notificacion',
    other: 'Tienes # notificaciones',
  };

  constructor() {}

  ngOnInit(): void {}

  addNotificacion() {
    this.notificaciones++;
  }
}
