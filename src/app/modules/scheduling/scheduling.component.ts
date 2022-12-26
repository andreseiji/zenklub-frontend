import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getTimezoneLocation, getTimezoneOffset } from 'src/app/utils/timezone';
import { Schedule, ScheduleSlot } from 'src/app/models/schedule';
import addDays from 'date-fns/addDays';
import { ProfessionalService } from 'src/app/services/professional-service.service';
import { isSameDay } from 'date-fns';

type SlotDay = {
  day: Date;
  slots: Schedule;
};

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss'],
})
export class SchedulingComponent implements OnInit {
  @Input() id: string | undefined;
  @Input() limit = 1;

  @Output() scheduleEvent = new EventEmitter<ScheduleSlot>();

  public start = 0;
  public currentDays: Date[] = [];
  public currentSlots: SlotDay[] = [];

  constructor(private professionalService: ProfessionalService) {
    professionalService;
  }

  getCurrentDays(start: number, limit: number): Date[] {
    const firstDay = addDays(new Date(), start);
    const currentDays = [];
    let iterator = 0;

    while (iterator < limit) {
      const currentDay = addDays(firstDay, iterator);
      currentDays.push(currentDay);
      iterator++;
    }

    return currentDays;
  }

  fetchCurrentSlots(id: string, start: number, limit: number): void {
    const startDate = addDays(new Date(), start);
    const endDate = addDays(new Date(), start + limit);
    this.professionalService
      .getProfessionalSchedule(
        id,
        startDate.toISOString(),
        endDate.toISOString()
      )
      .subscribe((data) => {
        const updatedSlots: SlotDay[] = [];
        this.currentDays.forEach((day) => {
          updatedSlots.push({
            day,
            slots: (data as Schedule).filter((slot) =>
              isSameDay(day, new Date(slot.startTime))
            ),
          });
        });
        this.currentSlots = [...updatedSlots];
      });
  }

  ngOnInit() {
    this.currentDays = this.getCurrentDays(this.start, this.limit);
    if (this.id) {
      this.fetchCurrentSlots(this.id, this.start, this.limit);
    }
  }

  getNextDays(): void {
    this.start = this.start + this.limit;
    this.currentDays = this.getCurrentDays(this.start, this.limit);
    if (this.id) {
      this.fetchCurrentSlots(this.id, this.start, this.limit);
    }
  }

  getPreviousDays(): void {
    if (this.start - this.limit >= 0) {
      this.start = this.start - this.limit;
    }
    this.currentDays = this.getCurrentDays(this.start, this.limit);
    if (this.id) {
      this.fetchCurrentSlots(this.id, this.start, this.limit);
    }
  }

  getTimezone(): string {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const location = getTimezoneLocation(timezone);
    const offset = getTimezoneOffset(timezone);
    return `${location}${offset ? ` (${offset})` : ''}`;
  }

  handleScheduleClick(value: ScheduleSlot) {
    this.scheduleEvent.emit(value);
  }
}
