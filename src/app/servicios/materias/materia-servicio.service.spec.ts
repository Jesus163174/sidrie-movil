import { TestBed } from '@angular/core/testing';

import { MateriaServicioService } from './materia-servicio.service';

describe('MateriaServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MateriaServicioService = TestBed.get(MateriaServicioService);
    expect(service).toBeTruthy();
  });
});
