import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaeroplanemodalComponent } from './createaeroplanemodal.component';

describe('CreateaeroplanemodalComponent', () => {
  let component: CreateaeroplanemodalComponent;
  let fixture: ComponentFixture<CreateaeroplanemodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateaeroplanemodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaeroplanemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
