import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentdetailComponent } from './entertainmentdetail.component';

describe('EntertainmentdetailComponent', () => {
  let component: EntertainmentdetailComponent;
  let fixture: ComponentFixture<EntertainmentdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
