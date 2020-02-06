import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroplaneSearchResultComponent } from './aeroplane-search-result.component';

describe('AeroplaneSearchResultComponent', () => {
  let component: AeroplaneSearchResultComponent;
  let fixture: ComponentFixture<AeroplaneSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeroplaneSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroplaneSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
