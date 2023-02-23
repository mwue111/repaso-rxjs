import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplesObsComponent } from './multiples-obs.component';

describe('MultiplesObsComponent', () => {
  let component: MultiplesObsComponent;
  let fixture: ComponentFixture<MultiplesObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplesObsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplesObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
