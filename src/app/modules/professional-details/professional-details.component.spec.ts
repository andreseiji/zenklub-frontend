import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfessionalProfileModule } from '../professional-profile/professional-profile.module';
import { SchedulingModule } from '../scheduling/scheduling.module';

import { ProfessionalDetailsComponent } from './professional-details.component';

describe('ProfessionalDetailsComponent', () => {
  let component: ProfessionalDetailsComponent;
  let fixture: ComponentFixture<ProfessionalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfessionalDetailsComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ProfessionalProfileModule,
        SchedulingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfessionalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
