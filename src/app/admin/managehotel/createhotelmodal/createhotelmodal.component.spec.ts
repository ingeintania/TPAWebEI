import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatehotelmodalComponent } from './createhotelmodal.component';

describe('CreatehotelmodalComponent', () => {
  let component: CreatehotelmodalComponent;
  let fixture: ComponentFixture<CreatehotelmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatehotelmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatehotelmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
