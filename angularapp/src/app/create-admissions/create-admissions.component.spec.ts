import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdmissionsComponent } from './create-admissions.component';

describe('CreateAdmissionsComponent', () => {
  let component: CreateAdmissionsComponent;
  let fixture: ComponentFixture<CreateAdmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAdmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
