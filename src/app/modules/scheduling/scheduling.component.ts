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
  public currentDays: Date[] = [];

  ngOnInit() {
    const now = new Date();
    this.currentDays = [now, addDays(now, 1), addDays(now, 2), addDays(now, 3)];
  }

  getTimezone(): string {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const location = getTimezoneLocation(timezone);
    const offset = getTimezoneOffset(timezone);
    return `${location}${offset ? ` (${offset})` : ''}`;
  }
}
