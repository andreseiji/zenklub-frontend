import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from '../professional-service.service';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.scss'],
})
export class ProfessionalDetailsComponent implements OnInit {
  constructor(private professionalService: ProfessionalService) {
    professionalService;
  }

  ngOnInit() {
    this.professionalService.getProfessional('1').subscribe((data) => {
      console.log(data);
    });
  }
}
