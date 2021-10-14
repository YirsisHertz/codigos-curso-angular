import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[textContent]',
})
export class TextContentDirective implements OnInit {
  private htmlElement: ElementRef<HTMLDivElement>;

  @Input()
  bgColor: string = 'snow';

  @Input()
  textColor: string = 'black';

  constructor(private el: ElementRef<HTMLDivElement>) {
    this.htmlElement = el;
  }

  ngOnInit() {
    this.textCenter();
    this.setBgColor();
    this.setTextColor();
  }

  textCenter() {
    this.htmlElement.nativeElement.style.textAlign = 'center';
  }

  setBgColor() {
    this.htmlElement.nativeElement.style.height = '100%';
    this.htmlElement.nativeElement.style.backgroundColor = this.bgColor;
  }

  setTextColor() {
    this.htmlElement.nativeElement.style.color = this.textColor;
  }
}
