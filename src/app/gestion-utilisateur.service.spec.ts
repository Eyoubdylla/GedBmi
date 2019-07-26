import { TestBed } from '@angular/core/testing';

import { GestionUtilisateurService } from './gestion-utilisateur.service';

describe('GestionUtilisateurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionUtilisateurService = TestBed.get(GestionUtilisateurService);
    expect(service).toBeTruthy();
  });
});
