import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateeventmodalComponent } from './createeventmodal.component';

describe('CreateeventmodalComponent', () => {
  let component: CreateeventmodalComponent;
  let fixture: ComponentFixture<CreateeventmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateeventmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateeventmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
