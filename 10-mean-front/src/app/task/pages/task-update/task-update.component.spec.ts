import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskUpdateComponent } from './task-update.component';

describe('TaskUpdateComponent', () => {
  let component: TaskUpdateComponent;
  let fixture: ComponentFixture<TaskUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
