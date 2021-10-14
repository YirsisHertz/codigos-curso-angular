import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionsComponent } from './colections.component';

describe('ColectionsComponent', () => {
  let component: ColectionsComponent;
  let fixture: ComponentFixture<ColectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
