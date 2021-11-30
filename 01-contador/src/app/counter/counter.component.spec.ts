import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { ButtonAddComponent } from './button-add/button-add.component';

describe('CounterComponent Unit', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
  });

  it('se debe crear el componente Counter', () => {
    const fixture = TestBed.createComponent(CounterComponent);

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('debe crear el texto Counter: 23', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.nativeElement;

    expect(compiled.querySelector('h1')?.textContent).toEqual('Contador: 23');
  });

  it('valor inicial del contador es 23', () => {
    const counter = new CounterComponent();

    expect(counter.contador).toBe(23);
  });
});

describe('Integration Testing', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent, ButtonAddComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('evento click', () => {
    const compiled: HTMLElement = fixture.nativeElement;

    const counterValue = compiled.querySelector('h1')!;

    const btnAdd: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('#add');

    btnAdd.click();

    fixture.detectChanges();

    expect(counterValue.textContent).toEqual('Contador: 24');
  });
});
