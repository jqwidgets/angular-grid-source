import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingDocsComponent } from './data-binding-docs.component';

describe('DataBindingDocsComponent', () => {
  let component: DataBindingDocsComponent;
  let fixture: ComponentFixture<DataBindingDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
