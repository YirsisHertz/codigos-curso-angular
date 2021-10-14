import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  persona = { nombre: 'Yirsis', edad: 21, nacionalidad: 'MX', genero: 'h' };

  temp = 36;

  mode = true;

  changeMode() {
    this.mode = !this.mode;
  }
}
