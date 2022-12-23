import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCardComponent } from './professional-card.component';

describe('ProfessionalCardComponent', () => {
  let component: ProfessionalCardComponent;
  let fixture: ComponentFixture<ProfessionalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfessionalCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfessionalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
