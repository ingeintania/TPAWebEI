import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentsearchComponent } from './entertainmentsearch.component';

describe('EntertainmentsearchComponent', () => {
  let component: EntertainmentsearchComponent;
  let fixture: ComponentFixture<EntertainmentsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
