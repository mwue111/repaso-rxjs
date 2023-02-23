import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTimeOutComponent } from './set-time-out.component';

describe('SetTimeOutComponent', () => {
  let component: SetTimeOutComponent;
  let fixture: ComponentFixture<SetTimeOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetTimeOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetTimeOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
