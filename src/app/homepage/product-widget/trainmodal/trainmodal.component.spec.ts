import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainmodalComponent } from './trainmodal.component';

describe('TrainmodalComponent', () => {
  let component: TrainmodalComponent;
  let fixture: ComponentFixture<TrainmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
