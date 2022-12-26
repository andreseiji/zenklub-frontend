import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
} from '@angular/core';
import { isSameDay } from 'date-fns';
import addDays from 'date-fns/addDays';
import { Subscription } from 'rxjs';
import { Schedule, ScheduleSlot } from 'src/app/models/schedule';
import { ProfessionalService } from 'src/app/services/professional-service.service';
import { getTimezoneLocation, getTimezoneOffset } from 'src/app/utils/timezone';

type SlotDay = {
  day: Date;
  slots: Schedule;
};

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss'],
})
export class SchedulingComponent implements OnChanges, OnDestroy {
  @Input() professionalId!: string;
  @Input() limit = 1;

  @Output() private scheduleEvent = new EventEmitter<ScheduleSlot>();

  protected scheduleSubscription!: Subscription;
  protected isLoading = false;
  protected start = 0;
  currentDays: Date[] = [];
  currentSlots: SlotDay[] = [];

  constructor(private professionalService: ProfessionalService) {}

  ngOnChanges() {
    this.currentDays = this.getCurrentDays(this.start, this.limit);
    this.fetchCurrentSlots(this.professionalId, this.start, this.limit);
  }

  ngOnDestroy(): void {
    if (this.scheduleSubscription) {
      this.scheduleSubscription.unsubscribe();
    }
  }

  updateCurrentSlots(slots: Schedule): void {
    const updatedSlots: SlotDay[] = [];
    this.currentDays.forEach((day) => {
      updatedSlots.push({
        day,
        slots: slots.filter((slot) => isSameDay(day, new Date(slot.startTime))),
      });
    });
    this.currentSlots = [...updatedSlots];
  }

  fetchCurrentSlots(
    professionalId: string,
    start: number,
    limit: number
  ): void {
    this.isLoading = true;
    const startDate = addDays(new Date(), start);
    const endDate = addDays(new Date(), start + limit);

    this.scheduleSubscription = this.professionalService
      .getProfessionalSchedule(
        professionalId,
        startDate.toISOString(),
        endDate.toISOString()
      )
      .subscribe((data) => {
        this.updateCurrentSlots(data);
        this.isLoading = false;
      });
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

  getNextDays(): void {
    this.start = this.start + this.limit;
    this.currentDays = this.getCurrentDays(this.start, this.limit);
    this.fetchCurrentSlots(this.professionalId, this.start, this.limit);
  }

  getPreviousDays(): void {
    if (this.start - this.limit >= 0) {
      this.start = this.start - this.limit;
    }
    this.currentDays = this.getCurrentDays(this.start, this.limit);
    this.fetchCurrentSlots(this.professionalId, this.start, this.limit);
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
