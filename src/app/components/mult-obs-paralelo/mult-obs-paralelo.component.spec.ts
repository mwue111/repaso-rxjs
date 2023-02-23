import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultObsParaleloComponent } from './mult-obs-paralelo.component';

describe('MultObsParaleloComponent', () => {
  let component: MultObsParaleloComponent;
  let fixture: ComponentFixture<MultObsParaleloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultObsParaleloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultObsParaleloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
