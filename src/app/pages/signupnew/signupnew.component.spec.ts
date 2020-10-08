import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupnewComponent } from './signupnew.component';

describe('SignupnewComponent', () => {
  let component: SignupnewComponent;
  let fixture: ComponentFixture<SignupnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
