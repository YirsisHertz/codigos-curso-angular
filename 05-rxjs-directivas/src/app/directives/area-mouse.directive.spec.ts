import { AreaMouseDirective } from './area-mouse.directive';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { By } from '@angular/platform-browser';

describe('AreaMouseDirective', () => {
  let fixture: any;
  let app: any;

  beforeEach(async () => {
    fixture = await TestBed.configureTestingModule({
      declarations: [AppComponent, AreaMouseDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(app).toBeTruthy();
  });

  it('deberia renderizar el div con 300px de alto', () => {
    const element: HTMLDivElement = fixture.debugElement.query(
      By.directive(AreaMouseDirective)
    ).nativeElement;

    expect(element.style.height).toEqual('300px');
  });

  it('deberia renderizar el div con el color Cyan', () => {
    const element: HTMLDivElement = fixture.debugElement.query(
      By.directive(AreaMouseDirective)
    ).nativeElement;

    expect(element.style.backgroundColor).toEqual('cyan');
  });
});
