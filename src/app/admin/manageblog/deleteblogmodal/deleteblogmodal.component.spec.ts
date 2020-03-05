import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteblogmodalComponent } from './deleteblogmodal.component';

describe('DeleteblogmodalComponent', () => {
  let component: DeleteblogmodalComponent;
  let fixture: ComponentFixture<DeleteblogmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteblogmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteblogmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
