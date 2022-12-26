import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { format } from 'date-fns';
import { Subscription } from 'rxjs';
import { Professional } from 'src/app/models/professional';
import { Schedule, ScheduleSlot } from 'src/app/models/schedule';
import { ProfessionalService } from '../../services/professional-service.service';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.scss'],
})
export class ProfessionalDetailsComponent implements OnInit, OnDestroy {
  protected routeSubscription!: Subscription;
  protected professionalSubscription!: Subscription;
  protected isLoading = false;
  protected professional: Professional = null;
  protected professionalSchedule: Schedule = [];
  protected limit = 1;

  constructor(
    private route: ActivatedRoute,
    private professionalService: ProfessionalService
  ) {
    this.onResize();
  }

  setLimitBasedOnWidth(width: number) {
    if (width < 600) {
      this.limit = 1;
    } else if (width < 960) {
      this.limit = 3;
    } else {
      this.limit = 4;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setLimitBasedOnWidth(window.innerWidth);
  }

  ngOnInit() {
    this.isLoading = true;
    this.routeSubscription = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = params.get('id') ?? '';
        this.professionalSubscription = this.professionalService
          .getProfessional(id)
          .subscribe((data) => {
            this.professional = data;
            this.isLoading = false;
          });
      }
    );
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
    if (this.professionalSubscription) {
      this.professionalSubscription.unsubscribe();
    }
  }

  schedule(slot: ScheduleSlot) {
    const startDate = new Date(slot.startTime);
    const day = format(startDate, 'dd/MM');
    const start = format(startDate, 'HH:mm');
    // Ideally, a styled modal, but for the purpose of this challenge, a plain JS confirm should be okay
    confirm(
      `Agendar horário com ${this.professional?.name}, dia ${day} às ${start}?`
    );
  }
}
