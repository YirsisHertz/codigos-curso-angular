import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[areaMouse]',
})
export class AreaMouseDirective implements OnInit {
  private htmlElement: ElementRef<HTMLDivElement>;

  @Input()
  height: number = 150;

  @Input()
  color: string = 'purple';

  constructor(private el: ElementRef<HTMLDivElement>) {
    this.htmlElement = el;
  }

  ngOnInit() {
    this.setHeight();
    this.setColor();
  }

  setHeight() {
    this.htmlElement.nativeElement.style.height = `${this.height}px`;
  }

  setColor() {
    this.htmlElement.nativeElement.style.backgroundColor = this.color;
  }
}
