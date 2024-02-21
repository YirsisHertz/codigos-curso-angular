import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerFabComponent } from './container-fab.component';

describe('ContainerFabComponent', () => {
  let component: ContainerFabComponent;
  let fixture: ComponentFixture<ContainerFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerFabComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create increment button', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.btn-primary')?.classList.value).toContain(
      'toLeft btn-primary',
    );
  });

  it('should create decrement button', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.btn-secondary')?.classList.value).toContain(
      'toRight btn-secondary',
    );
  });

  it('should create reset button', () => {
    const compiled = fixture.nativeElement.querySelector(
      '.btn-error',
    ) as HTMLButtonElement;

    expect(compiled.classList.value).toContain('toBottom btn-error');
  });
});
