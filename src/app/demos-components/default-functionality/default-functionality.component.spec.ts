import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultFunctionalityComponent } from './default-functionality.component';

describe('DefaultFunctionalityComponent', () => {
  let component: DefaultFunctionalityComponent;
  let fixture: ComponentFixture<DefaultFunctionalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultFunctionalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
