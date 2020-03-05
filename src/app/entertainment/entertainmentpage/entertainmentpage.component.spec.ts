import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentpageComponent } from './entertainmentpage.component';

describe('EntertainmentpageComponent', () => {
  let component: EntertainmentpageComponent;
  let fixture: ComponentFixture<EntertainmentpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
