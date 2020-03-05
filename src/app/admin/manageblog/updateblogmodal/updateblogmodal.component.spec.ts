import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateblogmodalComponent } from './updateblogmodal.component';

describe('UpdateblogmodalComponent', () => {
  let component: UpdateblogmodalComponent;
  let fixture: ComponentFixture<UpdateblogmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateblogmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateblogmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
