import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedGridsComponent } from './nested-grids.component';

describe('NestedGridsComponent', () => {
  let component: NestedGridsComponent;
  let fixture: ComponentFixture<NestedGridsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedGridsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
