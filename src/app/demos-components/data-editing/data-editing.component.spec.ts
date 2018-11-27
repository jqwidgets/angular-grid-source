import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEditingComponent } from './data-editing.component';

describe('DataEditingComponent', () => {
  let component: DataEditingComponent;
  let fixture: ComponentFixture<DataEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
