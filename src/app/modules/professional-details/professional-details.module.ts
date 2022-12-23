import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProfessionalDetailsComponent } from './professional-details.component';
import { ProfessionalProfileComponent } from './components/professional-profile/professional-profile.component';
import { SecondsToMinutesPipe } from 'src/app/pipes/seconds-to-minutes.pipe';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';

@NgModule({
  declarations: [
    ProfessionalDetailsComponent,
    ProfessionalProfileComponent,
    RatingStarsComponent,
    SecondsToMinutesPipe,
  ],
  imports: [CommonModule, HttpClientModule],
})
export class ProfessionalDetailsModule {}
