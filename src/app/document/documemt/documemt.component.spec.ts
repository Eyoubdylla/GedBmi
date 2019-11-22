import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumemtComponent } from './documemt.component';

describe('DocumemtComponent', () => {
  let component: DocumemtComponent;
  let fixture: ComponentFixture<DocumemtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumemtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
