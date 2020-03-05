import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetrainmodalComponent } from './createtrainmodal.component';

describe('CreatetrainmodalComponent', () => {
  let component: CreatetrainmodalComponent;
  let fixture: ComponentFixture<CreatetrainmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetrainmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetrainmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
