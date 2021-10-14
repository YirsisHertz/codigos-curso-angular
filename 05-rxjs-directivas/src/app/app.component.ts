import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  tam: number = 300;

  x: number = 0;
  y: number = 0;

  constructor() {}

  ngOnInit() {
    const obs = fromEvent<MouseEvent>(
      document.querySelector('#area')!,
      'mousemove'
    );

    obs.subscribe((ev: MouseEvent) => {
      this.x = ev.clientX;
      this.y = ev.clientY;
    });
  }
}
