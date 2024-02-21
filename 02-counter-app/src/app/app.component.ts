import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContainerFabComponent } from './components/container-fab/container-fab.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ContainerFabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public count: number = 0;

  public addCount() {
    this.count = this.count + 1;
  }

  public restoreCount() {
    this.count = 0;
  }

  public decreaseCount() {
    this.count--;
  }
}
