import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZommedimageComponent } from './zommedimage.component';

describe('ZommedimageComponent', () => {
  let component: ZommedimageComponent;
  let fixture: ComponentFixture<ZommedimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZommedimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZommedimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
