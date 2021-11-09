import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nPluralComponent } from './i18n-plural.component';

describe('I18nPluralComponent', () => {
  let component: I18nPluralComponent;
  let fixture: ComponentFixture<I18nPluralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I18nPluralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nPluralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
