import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProfessionalDetailsComponent } from './professional-details.component';
import { ProfessionalCardComponent } from './components/professional-card/professional-card.component';

@NgModule({
  declarations: [ProfessionalDetailsComponent, ProfessionalCardComponent],
  imports: [CommonModule, HttpClientModule],
})
export class ProfessionalDetailsModule {}
