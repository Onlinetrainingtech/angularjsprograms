import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTemplateDriveComponent } from './angular-template-drive.component';

describe('AngularTemplateDriveComponent', () => {
  let component: AngularTemplateDriveComponent;
  let fixture: ComponentFixture<AngularTemplateDriveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularTemplateDriveComponent]
    });
    fixture = TestBed.createComponent(AngularTemplateDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
