import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentcarmodalComponent } from './rentcarmodal.component';

describe('RentcarmodalComponent', () => {
  let component: RentcarmodalComponent;
  let fixture: ComponentFixture<RentcarmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentcarmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentcarmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
