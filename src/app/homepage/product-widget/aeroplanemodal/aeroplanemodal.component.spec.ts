import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroplanemodalComponent } from './aeroplanemodal.component';

describe('AeroplanemodalComponent', () => {
  let component: AeroplanemodalComponent;
  let fixture: ComponentFixture<AeroplanemodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeroplanemodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroplanemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
