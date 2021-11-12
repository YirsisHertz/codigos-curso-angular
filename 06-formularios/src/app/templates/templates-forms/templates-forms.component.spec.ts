import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesFormsComponent } from './templates-forms.component';

describe('TemplatesFormsComponent', () => {
  let component: TemplatesFormsComponent;
  let fixture: ComponentFixture<TemplatesFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatesFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
