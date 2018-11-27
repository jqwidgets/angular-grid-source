import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualPagingComponent } from './virtual-paging.component';

describe('VirtualPagingComponent', () => {
  let component: VirtualPagingComponent;
  let fixture: ComponentFixture<VirtualPagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualPagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
