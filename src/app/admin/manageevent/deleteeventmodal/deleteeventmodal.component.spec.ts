import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteeventmodalComponent } from './deleteeventmodal.component';

describe('DeleteeventmodalComponent', () => {
  let component: DeleteeventmodalComponent;
  let fixture: ComponentFixture<DeleteeventmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteeventmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteeventmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
