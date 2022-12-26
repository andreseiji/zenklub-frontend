import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { addDays } from 'date-fns';

import { SchedulingComponent } from './scheduling.component';

describe('SchedulingComponent', () => {
  let component: SchedulingComponent;
  let fixture: ComponentFixture<SchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchedulingComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getCurrentDays', () => {
    it('should return empty array when there start and limit are 0', () => {
      const result = component.getCurrentDays(0, 0);
      expect(result).toEqual([]);
    });

    it('should return array of two days when start is 0 and limit is 2', () => {
      const date = new Date('2022-12-31');
      const result = component.getCurrentDays(0, 2, date);
      expect(result.length).toBe(2);
      expect(result).toEqual([date, addDays(date, 1)]);
    });
  });

  describe('getNextDays', () => {
    it('should return update start', () => {
      component.start = 0;
      component.limit = 1;
      component.getNextDays();
      expect(component.start).toBe(1);
    });
  });

  describe('getPreviousDays', () => {
    it('should not update start if value would be less than 0', () => {
      component.start = 0;
      component.limit = 1;
      component.getPreviousDays();
      expect(component.start).toBe(0);
    });
    it('should update start if value would be 0 or more', () => {
      component.start = 2;
      component.limit = 1;
      component.getPreviousDays();
      expect(component.start).toBe(1);
    });
  });
});
