import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletehotelmodalComponent } from './deletehotelmodal.component';

describe('DeletehotelmodalComponent', () => {
  let component: DeletehotelmodalComponent;
  let fixture: ComponentFixture<DeletehotelmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletehotelmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletehotelmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
