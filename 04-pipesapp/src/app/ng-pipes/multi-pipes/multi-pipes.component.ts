import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-multi-pipes',
  templateUrl: './multi-pipes.component.html',
  styleUrls: ['./multi-pipes.component.css'],
})
export class MultiPipesComponent {
  title = 'tiTuLo xd';
  decimal = 13321.23712637126931923916;
  iva = 0.1632;

  @Input()
  mode = true;
}
