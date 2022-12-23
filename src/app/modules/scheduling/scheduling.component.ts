import { Component, Input, OnInit } from '@angular/core';
import { getTimezoneLocation, getTimezoneOffset } from 'src/app/utils/timezone';
import { Schedule } from 'src/app/models/schedule';
import addDays from 'date-fns/addDays';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss'],
})
export class SchedulingComponent implements OnInit {
  @Input() schedule: Schedule = [];
  public dateOffset = 0;
  public currentDays: Date[] = [];

  ngOnInit() {
    this.calculateCurrentDays();
  }

  calculateCurrentDays(): void {
    const now = new Date();
    this.currentDays = [
      addDays(now, 4 * this.dateOffset),
      addDays(now, 4 * this.dateOffset + 1),
      addDays(now, 4 * this.dateOffset + 2),
      addDays(now, 4 * this.dateOffset + 3),
    ];
  }

  getTimezone(): string {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const location = getTimezoneLocation(timezone);
    const offset = getTimezoneOffset(timezone);
    return `${location}${offset ? ` (${offset})` : ''}`;
  }

  getNextDays(): void {
    this.dateOffset = this.dateOffset + 1;
    this.calculateCurrentDays();
  }

  getPreviousDays(): void {
    if (this.dateOffset > 0) {
      this.dateOffset = this.dateOffset - 1;
    }
    this.calculateCurrentDays();
  }
}
