import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProfessionalProfileModule } from '../professional-profile/professional-profile.module';
import { SchedulingModule } from '../scheduling/scheduling.module';
import { ProfessionalDetailsComponent } from './professional-details.component';

@NgModule({
  declarations: [ProfessionalDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ProfessionalProfileModule,
    SchedulingModule,
  ],
})
export class ProfessionalDetailsModule {}
