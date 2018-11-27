import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshDataComponent } from './refresh-data.component';

describe('RefreshDataComponent', () => {
  let component: RefreshDataComponent;
  let fixture: ComponentFixture<RefreshDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
