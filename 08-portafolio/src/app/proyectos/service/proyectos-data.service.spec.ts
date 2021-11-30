import { TestBed } from '@angular/core/testing';

import { ProyectosDataService } from './proyectos-data.service';

describe('ProyectosDataService', () => {
  let service: ProyectosDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectosDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
