import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidermodalComponent } from './slidermodal.component';

describe('SlidermodalComponent', () => {
  let component: SlidermodalComponent;
  let fixture: ComponentFixture<SlidermodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidermodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidermodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
