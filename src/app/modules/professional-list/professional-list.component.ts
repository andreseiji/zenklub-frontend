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
  protected isLoading = false;

  constructor(private professionalService: ProfessionalService) {}

  ngOnInit() {
    this.isLoading = true;
    this.professionalsSubscription = this.professionalService
      .getProfessionals()
      .subscribe((data) => {
        this.professionals = [...data];
        this.isLoading = false;
      });
  }

  ngOnDestroy() {
    if (this.professionalsSubscription) {
      this.professionalsSubscription.unsubscribe();
    }
  }
}
