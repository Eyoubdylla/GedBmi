import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupesUtlisateursComponent } from './groupes-utlisateurs.component';

describe('GroupesUtlisateursComponent', () => {
  let component: GroupesUtlisateursComponent;
  let fixture: ComponentFixture<GroupesUtlisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupesUtlisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupesUtlisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
