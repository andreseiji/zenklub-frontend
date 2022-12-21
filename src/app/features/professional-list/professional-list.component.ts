import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from '../../services/professional-service.service';

@Component({
  selector: 'app-professional-list',
  templateUrl: './professional-list.component.html',
  styleUrls: ['./professional-list.component.scss'],
})
export class ProfessionalListComponent implements OnInit {
  constructor(private professionalService: ProfessionalService) {
    professionalService;
  }

  ngOnInit() {
    this.professionalService.getProfessionals().subscribe((data) => {
      console.log(data);
    });
  }
}
