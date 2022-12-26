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

  describe('When window is resized', () => {
    it('should change limit to 1 when its width is less than 600px', () => {
      component.setLimitBasedOnWidth(599);
      expect(component.limit).toBe(1);
    });

    it('should change limit to 3 when its width is between 600px and 960px', () => {
      component.setLimitBasedOnWidth(720);
      expect(component.limit).toBe(3);
    });

    it('should change limit to 4 when its width is more then 960px', () => {
      component.setLimitBasedOnWidth(1200);
      expect(component.limit).toBe(4);
    });
  });

  describe('When schedule is called', () => {
    it('should open a vanilla JS confirm', () => {
      spyOn(window, 'confirm').and.returnValue(true);
      const startDate = new Date();
      component.schedule({
        startTime: startDate.toISOString(),
        endTime: startDate.toISOString(),
      });
      expect(window.confirm).toHaveBeenCalledTimes(1);
    });
  });
});
