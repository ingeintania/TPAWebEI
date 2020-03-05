import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetrainmodalComponent } from './deletetrainmodal.component';

describe('DeletetrainmodalComponent', () => {
  let component: DeletetrainmodalComponent;
  let fixture: ComponentFixture<DeletetrainmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletetrainmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetrainmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
