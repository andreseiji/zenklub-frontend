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
  @Input() mobile = false;

  @Output() scheduleEvent = new EventEmitter<ScheduleSlot>();

  public dateOffset = 0;
  public currentDays: Date[] = [];
  public currentSlots: SlotDay[] = [];

  constructor(private professionalService: ProfessionalService) {
    professionalService;
  }

  calculateCurrentDays(offset: number): void {
    const now = new Date();
    if (this.mobile) {
      this.currentDays = [addDays(now, offset)];
    } else {
      this.currentDays = [
        addDays(now, 4 * offset),
        addDays(now, 4 * offset + 1),
        addDays(now, 4 * offset + 2),
        addDays(now, 4 * offset + 3),
      ];
    }
  }

  fetchCurrentSlots(id: string, offset: number): void {
    const now = new Date();
    const startDate = addDays(now, (this.mobile ? 1 : 4) * offset);
    const endDate = addDays(startDate, this.mobile ? 1 : 4);
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

  handleScheduleClick(value: ScheduleSlot) {
    this.scheduleEvent.emit(value);
  }
}
