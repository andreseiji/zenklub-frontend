import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Professional } from 'src/app/models/professional';
import { ProfessionalService } from '../../services/professional-service.service';

@Component({
  selector: 'app-professional-list',
  templateUrl: './professional-list.component.html',
  styleUrls: ['./professional-list.component.scss'],
})
export class ProfessionalListComponent implements OnInit, OnDestroy {
  protected professionalsSubscription!: Subscription;
  protected professionals: Professional[] = [];

  constructor(private professionalService: ProfessionalService) {}

  ngOnInit() {
    this.professionalsSubscription = this.professionalService
      .getProfessionals()
      .subscribe((data) => {
        this.professionals = [...data];
      });
  }

  ngOnDestroy() {
    if (this.professionalsSubscription) {
      this.professionalsSubscription.unsubscribe();
    }
  }
}
