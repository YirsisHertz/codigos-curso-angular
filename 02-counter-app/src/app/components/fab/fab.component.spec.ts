import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { FabComponent } from './fab.component';

describe('FabComponent', () => {
  let component: FabComponent;
  let fixture: ComponentFixture<FabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabComponent, CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FabComponent);
    component = fixture.componentInstance;
  });

  it('should create increment button', () => {
    component.position = 'left';
    component.text = 'bi bi-plus-lg';
    component.theme = 'primary';

    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('.bi.bi-plus-lg')?.classList.value).toContain(
      'bi bi-plus-lg',
    );
  });

  it('should create decrement button', () => {
    component.position = 'right';
    component.text = 'bi bi-dash-lg';
    component.theme = 'secondary';

    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('.bi.bi-dash-lg')?.classList.value).toContain(
      'bi bi-dash-lg',
    );
  });

  it('should create decrement button', () => {
    component.position = 'right';
    component.text = 'bi bi-arrow-clockwise';
    component.theme = 'error';

    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;

    expect(
      element.querySelector('.bi.bi-arrow-clockwise')?.classList.value,
    ).toContain('bi bi-arrow-clockwise');
  });
});
