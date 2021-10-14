import { TextContentDirective } from './text-content.directive';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { By } from '@angular/platform-browser';

describe('TextContentDirective', () => {
  let fixture: any;
  let app: any;

  beforeEach(async () => {
    fixture = await TestBed.configureTestingModule({
      declarations: [AppComponent, TextContentDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(app).toBeTruthy();
  });

  it('deberia renderizar el texto al centro', () => {
    const element: HTMLDivElement = fixture.debugElement.query(
      By.directive(TextContentDirective)
    ).nativeElement;

    expect(element.style.textAlign).toEqual('center');
  });

  it('deberia renderizar el fondo de color #333', () => {
    const element: HTMLDivElement = fixture.debugElement.query(
      By.directive(TextContentDirective)
    ).nativeElement;

    expect(element.style.backgroundColor).toEqual('rgb(51, 51, 51)');
  });

  it('deberia renderizar el texto de color White', () => {
    const element: HTMLDivElement = fixture.debugElement.query(
      By.directive(TextContentDirective)
    ).nativeElement;

    expect(element.style.color).toEqual('white');
  });
});
