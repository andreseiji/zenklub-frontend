import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Professional } from 'src/app/models/professional';
import { ProfessionalService } from '../../services/professional-service.service';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.scss'],
})
export class ProfessionalDetailsComponent implements OnInit {
  protected professional: Professional = null;

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
        console.log(data);
        this.professional = data as Professional;
      });
    });
  }
}