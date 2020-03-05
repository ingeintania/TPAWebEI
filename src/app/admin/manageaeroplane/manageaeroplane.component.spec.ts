import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageaeroplaneComponent } from './manageaeroplane.component';

describe('ManageaeroplaneComponent', () => {
  let component: ManageaeroplaneComponent;
  let fixture: ComponentFixture<ManageaeroplaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageaeroplaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageaeroplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
