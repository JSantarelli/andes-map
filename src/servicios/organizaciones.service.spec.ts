import { TestBed } from '@angular/core/testing';

import { OrganizacionesService } from './organizacion.service';

describe('OrganizacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizacionesService = TestBed.get(OrganizacionesService);
    expect(service).toBeTruthy();
  });
});
