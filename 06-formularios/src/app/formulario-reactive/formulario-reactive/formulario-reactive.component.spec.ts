import { FormularioReactiveComponent } from './formulario-reactive.component';
import { FormBuilder } from '@angular/forms';

describe('FormularioReactiveComponent', () => {
  let component: FormularioReactiveComponent;

  beforeEach(() => {
    component = new FormularioReactiveComponent(new FormBuilder());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia crear un formulario con 3 campos, proyecto, horas y tecnologias', () => {
    const formulario = component.miFormulario;

    const proyecto = formulario.get('proyecto');
    const horas = formulario.get('horas');
    const tecnologias = formulario.get('tecnologias');

    expect(proyecto).toBeTruthy();
    expect(horas).toBeTruthy();
    expect(tecnologias).toBeTruthy();
  });

  it('deberia verificar que el campo proyecto acepte minimo 3 letras', () => {
    const formulario = component.miFormulario;

    const proyecto = formulario.get('proyecto');

    proyecto?.setValue('abc');

    expect(proyecto?.valid).toBeTruthy();
  });

  it('deberia verificar que el campo proyecto acepte maxima 15 letras', () => {
    const formulario = component.miFormulario;

    const proyecto = formulario.get('proyecto');

    proyecto?.setValue('abcunrtueortsanurtaoruaoroeut');

    expect(proyecto?.valid).toBeFalsy();
  });

  it('deberia verificar el campo horas', () => {
    const formulario = component.miFormulario;
    const horas = formulario.get('horas');

    expect(horas?.valid).toBeTruthy();

    horas?.setValue(0);
    expect(horas?.invalid).toBeTruthy();

    horas?.setValue(51);
    expect(horas?.invalid).toBeTruthy();

    horas?.setValue('51');
    expect(horas?.invalid).toBeTruthy();
  });

  it('deberia verificar el agregar tecnologias', () => {
    const tecnologiasArray = component.tecnologias;
    const tecnologiaControl = component.tecnologia;

    tecnologiaControl.setValue('Node');
    component.agregarTecnolgia();

    tecnologiaControl.setValue('Angular');
    component.agregarTecnolgia();

    expect(tecnologiasArray?.value.length).toBe(2);
    expect(tecnologiasArray?.value).toEqual(['Node', 'Angular']);
  });

  it('deberia verificar el agregar proyecto', () => {
    const formulario = component.miFormulario;

    const proyecto = formulario.get('proyecto');
    const horas = formulario.get('horas');

    const tecnologiaControl = component.tecnologia;

    proyecto?.setValue('Blog');

    horas?.setValue(4);

    tecnologiaControl.setValue('Node');
    component.agregarTecnolgia();

    tecnologiaControl.setValue('Angular');
    component.agregarTecnolgia();

    component.agregarProyecto();

    expect(component.proyectos.length).toBe(1);
  });
});
