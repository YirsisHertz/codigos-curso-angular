import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[textData]',
})
export class TextDataDirective implements OnInit {
  private htmlElement: ElementRef<HTMLElement>;

  @Input()
  fs: string = '2';

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit() {
    this.setFontSize();
  }

  setFontSize() {
    this.htmlElement.nativeElement.style.fontSize = `${this.fs}rem`;
  }
}
