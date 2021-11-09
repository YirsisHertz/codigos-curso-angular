import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[areaMouse]',
})
export class AreaMouseDirective implements OnInit {
  @Input()
  color = 'green';

  @Input()
  height = '200';

  constructor(private el: ElementRef<HTMLDivElement>) {}

  ngOnInit() {
    this.setBackground();
    this.setHeight();
  }

  setBackground() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  setHeight() {
    this.el.nativeElement.style.height = `${this.height}px`;
  }
}
