import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicImgComponent } from './dinamic-img.component';
import { LoadingComponent } from '../loading/loading.component';

describe('DinamicImgComponent', () => {
  let component: DinamicImgComponent;
  let fixture: ComponentFixture<DinamicImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DinamicImgComponent, LoadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinamicImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
