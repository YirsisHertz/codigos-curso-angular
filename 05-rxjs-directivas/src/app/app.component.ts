import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rxjs-directivas';

  visible = true;

  setVisible() {
    this.visible = !this.visible;
  }

  ngOnInit() {
    this.title = 'Componente creado';
  }

  ngOnDestroy() {
    this.title = 'Componente eliminado';
  }
}
