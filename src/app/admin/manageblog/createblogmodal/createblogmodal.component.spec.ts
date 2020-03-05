import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateblogmodalComponent } from './createblogmodal.component';

describe('CreateblogmodalComponent', () => {
  let component: CreateblogmodalComponent;
  let fixture: ComponentFixture<CreateblogmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateblogmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateblogmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
