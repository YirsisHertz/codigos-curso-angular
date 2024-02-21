import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export type Position = 'left' | 'right' | 'bottom';
export type Theme = 'primary' | 'secondary' | 'error';

@Component({
  selector: 'app-fab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fab.component.html',
  styleUrl: './fab.component.css',
})
export class FabComponent {
  @Input({
    required: true,
    alias: 'fabText',
  })
  public text!: string;

  @Input({
    required: true,
    transform: (value: Position) => {
      switch (value) {
        case 'left':
          return 'toLeft';
        case 'right':
          return 'toRight';
        default:
          return 'toBottom';
      }
    },
  })
  public position!: Position;

  @Input({
    required: true,
    transform: (value: Theme) => `btn-${value}`,
  })
  public theme!: Theme;

  @Output()
  public actionCallback = new EventEmitter();

  public clickEmit() {
    this.actionCallback.emit();
  }
}
