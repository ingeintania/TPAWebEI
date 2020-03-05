import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateaeroplanemodalComponent } from './updateaeroplanemodal.component';

describe('UpdateaeroplanemodalComponent', () => {
  let component: UpdateaeroplanemodalComponent;
  let fixture: ComponentFixture<UpdateaeroplanemodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateaeroplanemodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateaeroplanemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
