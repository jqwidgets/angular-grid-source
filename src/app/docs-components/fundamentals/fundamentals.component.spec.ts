import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentalsComponent } from './fundamentals.component';

describe('FundamentalsComponent', () => {
  let component: FundamentalsComponent;
  let fixture: ComponentFixture<FundamentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundamentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
