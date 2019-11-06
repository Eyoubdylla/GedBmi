import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechDocumtComponent } from './rech-documt.component';

describe('RechDocumtComponent', () => {
  let component: RechDocumtComponent;
  let fixture: ComponentFixture<RechDocumtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechDocumtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechDocumtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
