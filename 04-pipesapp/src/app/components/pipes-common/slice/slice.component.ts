import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slice',
  templateUrl: './slice.component.html',
  styleUrls: ['./slice.component.css'],
})
export class SliceComponent implements OnInit {
  frutas = ['naranja', 'manzana', 'pera', 'mango', 'sandia', 'uva', 'banana'];
  letras = 'abcdefg';

  constructor() {}

  ngOnInit(): void {}
}
