import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiReferenceComponent } from './api-reference.component';

describe('ApiReferenceComponent', () => {
  let component: ApiReferenceComponent;
  let fixture: ComponentFixture<ApiReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
