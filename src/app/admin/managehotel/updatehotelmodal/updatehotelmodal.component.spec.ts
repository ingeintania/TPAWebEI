import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatehotelmodalComponent } from './updatehotelmodal.component';

describe('UpdatehotelmodalComponent', () => {
  let component: UpdatehotelmodalComponent;
  let fixture: ComponentFixture<UpdatehotelmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatehotelmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatehotelmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
