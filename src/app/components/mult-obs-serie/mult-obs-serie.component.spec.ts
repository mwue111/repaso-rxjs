import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultObsSerieComponent } from './mult-obs-serie.component';

describe('MultObsSerieComponent', () => {
  let component: MultObsSerieComponent;
  let fixture: ComponentFixture<MultObsSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultObsSerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultObsSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
