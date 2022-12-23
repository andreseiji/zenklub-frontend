import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SecondsToMinutesPipe } from 'src/app/pipes/seconds-to-minutes.pipe';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';
import { ProfessionalProfileComponent } from './professional-profile.component';

@NgModule({
  declarations: [
    ProfessionalProfileComponent,
    RatingStarsComponent,
    SecondsToMinutesPipe,
  ],
  imports: [CommonModule],
  exports: [
    ProfessionalProfileComponent,
    RatingStarsComponent,
    SecondsToMinutesPipe,
  ],
})
export class ProfessionalProfileModule {}
