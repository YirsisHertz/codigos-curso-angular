import { Component, EventEmitter, Output } from '@angular/core';
import { FabComponent } from '../fab/fab.component';

interface FabActions {
  addCount: any;
  restoreCount: any;
  decreaseCount: any;
}

@Component({
  selector: 'app-container-fab',
  standalone: true,
  imports: [FabComponent],
  templateUrl: './container-fab.component.html',
  styleUrl: './container-fab.component.css',
})
export class ContainerFabComponent {
  @Output() incrementActionEmitter = new EventEmitter();
  @Output() resetActionEmitter = new EventEmitter();
  @Output() decrementActionEmitter = new EventEmitter();

  public incrementAction() {
    this.incrementActionEmitter.emit();
  }

  public resetAction() {
    this.resetActionEmitter.emit();
  }

  public decreaseAction() {
    this.decrementActionEmitter.emit();
  }
}
