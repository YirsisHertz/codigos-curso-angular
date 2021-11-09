import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-value',
  templateUrl: './key-value.component.html',
  styleUrls: ['./key-value.component.css'],
})
export class KeyValueComponent implements OnInit {
  persona = {
    nombre: 'yirsis',
    edad: 21,
    ocupacion: 'developer',
  };

  constructor() {}

  ngOnInit(): void {}
}
