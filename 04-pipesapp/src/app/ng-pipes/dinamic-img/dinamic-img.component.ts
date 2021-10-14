import { Component } from '@angular/core';

@Component({
  selector: 'app-dinamic-img',
  templateUrl: './dinamic-img.component.html',
  styleUrls: ['./dinamic-img.component.css'],
})
export class DinamicImgComponent {
  img = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('https://picsum.photos/200/300');
    }, 3000);
  });
}
