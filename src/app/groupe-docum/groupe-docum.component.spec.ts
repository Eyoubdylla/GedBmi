import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeDocumComponent } from './groupe-docum.component';

describe('GroupeDocumComponent', () => {
  let component: GroupeDocumComponent;
  let fixture: ComponentFixture<GroupeDocumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeDocumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeDocumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
