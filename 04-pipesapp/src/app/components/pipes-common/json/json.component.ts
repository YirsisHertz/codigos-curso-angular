import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css'],
})
export class JsonComponent implements OnInit {
  persona = {
    nombre: 'yirsis',
    edad: 21,
    ocupacion: 'developer',
  };

  constructor() {}

  ngOnInit(): void {}
}
