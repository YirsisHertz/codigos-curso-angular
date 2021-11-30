import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDisComponent } from './button-dis.component';

describe('ButtonDisComponent', () => {
  let component: ButtonDisComponent;
  let fixture: ComponentFixture<ButtonDisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonDisComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe emitir el valor de -1', () => {
    let nuevoContador = 0;

    component.onDis.subscribe((contador) => {
      nuevoContador = contador;
    });

    component.dis();

    expect(nuevoContador).toBe(-1);
  });
});
