import { Component, Input } from '@angular/core';
import { getTimezoneOffset } from 'src/app/utils/timezone';
import { Schedule } from 'src/app/models/schedule';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss'],
})
export class SchedulingComponent {
  @Input() schedule: Schedule = [];

  getTimezone(): string {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offset = getTimezoneOffset(timezone);
    return `${timezone}${offset ? ` (${offset})` : null}`;
  }
}
