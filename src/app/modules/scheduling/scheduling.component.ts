import { Component, Input, OnInit } from '@angular/core';
import { getTimezoneLocation, getTimezoneOffset } from 'src/app/utils/timezone';
import { Schedule } from 'src/app/models/schedule';
import addDays from 'date-fns/addDays';
import { ProfessionalService } from 'src/app/services/professional-service.service';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss'],
})
export class SchedulingComponent implements OnInit {
  @Input() id: string | undefined;
  public schedule: Schedule = [];
  public dateOffset = 0;
  public currentDays: Date[] = [];

  constructor(private professionalService: ProfessionalService) {
    professionalService;
  }

  calculateCurrentDays(offset: number): void {
    const now = new Date();
    this.currentDays = [
      addDays(now, 4 * offset),
      addDays(now, 4 * offset + 1),
      addDays(now, 4 * offset + 2),
      addDays(now, 4 * offset + 3),
    ];
  }

  fetchCurrentSlots(id: string, offset: number): void {
    const now = new Date();
    const startDate = addDays(now, 4 * offset);
    const endDate = addDays(startDate, 4);
    this.professionalService
      .getProfessionalSchedule(
        id,
        startDate.toISOString(),
        endDate.toISOString()
      )
      .subscribe((data) => {
        this.schedule = data as Schedule;
        console.log('this.schedule', this.schedule);
      });
  }

  ngOnInit() {
    this.calculateCurrentDays(this.dateOffset);
    if (this.id) {
      this.fetchCurrentSlots(this.id, this.dateOffset);
    }
  }

  getTimezone(): string {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const location = getTimezoneLocation(timezone);
    const offset = getTimezoneOffset(timezone);
    return `${location}${offset ? ` (${offset})` : ''}`;
  }

  getNextDays(): void {
    this.dateOffset = this.dateOffset + 1;
    this.calculateCurrentDays(this.dateOffset);
    if (this.id) {
      this.fetchCurrentSlots(this.id, this.dateOffset);
    }
  }

  getPreviousDays(): void {
    if (this.dateOffset > 0) {
      this.dateOffset = this.dateOffset - 1;
    }
    this.calculateCurrentDays(this.dateOffset);
    if (this.id) {
      this.fetchCurrentSlots(this.id, this.dateOffset);
    }
  }
}
