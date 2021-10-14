import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DarkModePipe } from './pipes/darkMode.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { NgPipesModule } from './ng-pipes/ng-pipes.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, DarkModePipe, TemperaturePipe],
      imports: [NgPipesModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
