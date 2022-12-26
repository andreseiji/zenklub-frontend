import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { addDays } from 'date-fns';
import { BASE_API_URL } from 'src/config/api';

import { ProfessionalService } from './professional-service.service';

describe('ProfessionalService', () => {
  let service: ProfessionalService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProfessionalService);
    controller = TestBed.inject(HttpTestingController);
  });

  describe('getProfessionalSchedule', () => {
    it('should call endpoint without dates when none is passed', () => {
      const sub = service.getProfessionalSchedule('1').subscribe();

      controller.expectOne({
        method: 'GET',
        url: `${BASE_API_URL}/professionals/1/schedule`,
      });

      expect(sub).toBeTruthy();
      sub.unsubscribe();
    });
    it('should call endpoint with date filters when dates are passed', () => {
      const startDate = new Date();
      const endDate = addDays(startDate, 10);
      const sub = service
        .getProfessionalSchedule(
          '1',
          startDate.toISOString(),
          endDate.toISOString()
        )
        .subscribe();

      controller.expectOne({
        method: 'GET',
        url: `${BASE_API_URL}/professionals/1/schedule?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`,
      });

      expect(sub).toBeTruthy();
      sub.unsubscribe();
    });
  });
});
