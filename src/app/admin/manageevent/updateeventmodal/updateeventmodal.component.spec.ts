import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateeventmodalComponent } from './updateeventmodal.component';

describe('UpdateeventmodalComponent', () => {
  let component: UpdateeventmodalComponent;
  let fixture: ComponentFixture<UpdateeventmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateeventmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateeventmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
