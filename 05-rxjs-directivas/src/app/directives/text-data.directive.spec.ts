import { TextDataDirective } from './text-data.directive';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { By } from '@angular/platform-browser';

describe('TextDataDirective', () => {
  let fixture: any;
  let app: any;

  beforeEach(async () => {
    fixture = await TestBed.configureTestingModule({
      declarations: [AppComponent, TextDataDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('deberia aplicar un fontsize de 2 rem', () => {
    const h1 = fixture.debugElement.query(By.directive(TextDataDirective));

    expect(h1.nativeElement.style.fontSize).toEqual('2rem');
  });
});
