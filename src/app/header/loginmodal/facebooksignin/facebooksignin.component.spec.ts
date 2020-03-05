import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebooksigninComponent } from './facebooksignin.component';

describe('FacebooksigninComponent', () => {
  let component: FacebooksigninComponent;
  let fixture: ComponentFixture<FacebooksigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebooksigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebooksigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
