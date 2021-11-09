import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css'],
})
export class NumerosComponent implements OnInit {
  calificacion: number = 7;

  porcentaje: number = 0.36732;

  saldo: number = 12000;

  constructor() {}

  ngOnInit(): void {}
}
