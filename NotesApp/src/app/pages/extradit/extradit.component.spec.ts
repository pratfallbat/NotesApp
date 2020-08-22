import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraditComponent } from './extradit.component';

describe('ExtraditComponent', () => {
  let component: ExtraditComponent;
  let fixture: ComponentFixture<ExtraditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
