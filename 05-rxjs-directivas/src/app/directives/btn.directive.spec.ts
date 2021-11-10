import { BtnDirective } from './btn.directive';
import { AppComponent } from '../app.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('BtnDirective', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    fixture = await TestBed.configureTestingModule({
      declarations: [AppComponent, BtnDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia crear un boton con fondo purple, color de texto snow, un tamaño del 100%', () => {
    const element: HTMLButtonElement = fixture.debugElement.query(
      By.directive(BtnDirective)
    ).nativeElement;

    expect(element.style.backgroundColor).toEqual('purple');
    expect(element.style.color).toEqual('snow');
    expect(element.style.width).toEqual('100%');
  });
});
