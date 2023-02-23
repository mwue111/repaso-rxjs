import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextErrorCompleteComponent } from './next-error-complete.component';

describe('NextErrorCompleteComponent', () => {
  let component: NextErrorCompleteComponent;
  let fixture: ComponentFixture<NextErrorCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextErrorCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextErrorCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
