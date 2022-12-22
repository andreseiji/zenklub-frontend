import { Component, OnInit } from '@angular/core';
import { Professional } from 'src/app/models/professional';
import { ProfessionalService } from '../../services/professional-service.service';

@Component({
  selector: 'app-professional-list',
  templateUrl: './professional-list.component.html',
  styleUrls: ['./professional-list.component.scss'],
})
export class ProfessionalListComponent implements OnInit {
  protected professionals: Professional[] = [];

  constructor(private professionalService: ProfessionalService) {}

  ngOnInit() {
    this.professionalService.getProfessionals().subscribe((data) => {
      this.professionals = [...(data as Professional[])];
    });
  }
}
