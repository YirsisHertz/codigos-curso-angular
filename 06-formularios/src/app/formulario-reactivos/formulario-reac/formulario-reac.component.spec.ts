import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { FormularioReacComponent } from './formulario-reac.component';

describe('FormularioReacComponent', () => {
  let component: FormularioReacComponent;
  let fixture: ComponentFixture<FormularioReacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioReacComponent],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioReacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("deberia tener los valores por defecto de: '', '', 0", () => {
    expect(component.formulario.value).toEqual({
      nombre: '',
      correo: '',
      edad: 0,
    });
  });

  it('deberia ser un nombre valido si tiene más de 2 letras y menos de 15', () => {
    const nombre = component.formulario.get('nombre');

    nombre?.setValue('jose');

    expect(nombre?.valid).toBeTruthy();
  });

  it('deberia ser un nombre invalido si tiene menos de 2 letras o mas de 15', () => {
    const nombre = component.formulario.get('nombre');

    nombre?.setValue('p');

    expect(nombre?.valid).toBeFalsy();

    nombre?.setValue('1234567890abcdef');

    expect(nombre?.valid).toBeFalsy();
  });

  it('deberia ser requerido el campo edad', () => {
    const edad = component.formulario.get('edad');

    edad?.setValue('');

    expect(edad?.errors).toEqual({ required: true });
  });

  it('deberia ser requerido el campo edad', () => {
    const edad = component.formulario.get('edad');

    edad?.setValue(500);

    expect(edad?.errors).toEqual({ max: { actual: 500, max: 100 } });
  });
});
