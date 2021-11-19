import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTemplateComponent } from './formulario-template.component';
import { FormsModule } from '@angular/forms';

describe('FormularioTemplateComponent', () => {
  let component: FormularioTemplateComponent;
  let fixture: ComponentFixture<FormularioTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioTemplateComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
