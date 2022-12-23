import { Component, Input } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss'],
})
export class SchedulingComponent {
  @Input() schedule: Schedule = [];
}
