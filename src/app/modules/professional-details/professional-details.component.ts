import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { format, getDay } from 'date-fns';
import { Professional } from 'src/app/models/professional';
import { Schedule, ScheduleSlot } from 'src/app/models/schedule';
import { ProfessionalService } from '../../services/professional-service.service';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.scss'],
})
export class ProfessionalDetailsComponent implements OnInit {
  protected professional: Professional = null;
  protected professionalSchedule: Schedule = [];

  constructor(
    private route: ActivatedRoute,
    private professionalService: ProfessionalService
  ) {
    professionalService;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id') ?? '';
      this.professionalService.getProfessional(id).subscribe((data) => {
        this.professional = data as Professional;
      });
    });
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
