import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetrainmodalComponent } from './updatetrainmodal.component';

describe('UpdatetrainmodalComponent', () => {
  let component: UpdatetrainmodalComponent;
  let fixture: ComponentFixture<UpdatetrainmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetrainmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetrainmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
