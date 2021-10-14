import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiPipesComponent } from './multi-pipes.component';

describe('MultiPipesComponent', () => {
  let component: MultiPipesComponent;
  let fixture: ComponentFixture<MultiPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
