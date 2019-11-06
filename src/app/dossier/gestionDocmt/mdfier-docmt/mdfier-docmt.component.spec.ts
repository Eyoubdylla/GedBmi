import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfierDocmtComponent } from './mdfier-docmt.component';

describe('MdfierDocmtComponent', () => {
  let component: MdfierDocmtComponent;
  let fixture: ComponentFixture<MdfierDocmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdfierDocmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfierDocmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
