import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGenerateComponent } from './create-generate.component';

describe('CreateGenerateComponent', () => {
  let component: CreateGenerateComponent;
  let fixture: ComponentFixture<CreateGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGenerateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
