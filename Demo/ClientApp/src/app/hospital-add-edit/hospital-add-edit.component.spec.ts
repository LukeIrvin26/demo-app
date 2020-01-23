import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalAddEditComponent } from './hospital-add-edit.component';

describe('HospitalAddEditComponent', () => {
  let component: HospitalAddEditComponent;
  let fixture: ComponentFixture<HospitalAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
