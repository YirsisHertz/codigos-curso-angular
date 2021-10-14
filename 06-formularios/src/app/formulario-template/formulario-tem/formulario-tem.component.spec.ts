import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { FormularioTemComponent } from './formulario-tem.component';

describe('FormularioTemComponent', () => {
  let component: FormularioTemComponent;
  let fixture: ComponentFixture<FormularioTemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioTemComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia llenar el campo nombre', () => {
    const inputNombre: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    inputNombre.value = 'yirsis';

    expect(inputNombre.value).toEqual('yirsis');
  });

  it('deberia llenar formulario correctamente', () => {
    const inputs: Array<HTMLInputElement> =
      fixture.nativeElement.querySelectorAll('input');

    const [nombre, correo, edad] = inputs;

    nombre.value = 'yirsis';
    correo.value = 'yirsis@mail.com';
    edad.value = '25';

    expect(component.formulario.valid).toBeTruthy();
  });
});
