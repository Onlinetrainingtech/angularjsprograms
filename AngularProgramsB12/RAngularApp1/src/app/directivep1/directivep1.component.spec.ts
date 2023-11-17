import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directivep1Component } from './directivep1.component';

describe('Directivep1Component', () => {
  let component: Directivep1Component;
  let fixture: ComponentFixture<Directivep1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Directivep1Component]
    });
    fixture = TestBed.createComponent(Directivep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
