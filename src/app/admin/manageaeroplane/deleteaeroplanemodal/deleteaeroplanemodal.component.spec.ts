import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteaeroplanemodalComponent } from './deleteaeroplanemodal.component';

describe('DeleteaeroplanemodalComponent', () => {
  let component: DeleteaeroplanemodalComponent;
  let fixture: ComponentFixture<DeleteaeroplanemodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteaeroplanemodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteaeroplanemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
