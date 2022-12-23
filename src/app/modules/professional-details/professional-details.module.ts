import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProfessionalDetailsComponent } from './professional-details.component';
import { ProfessionalProfileComponent } from './components/professional-profile/professional-profile.component';

@NgModule({
  declarations: [ProfessionalDetailsComponent, ProfessionalProfileComponent],
  imports: [CommonModule, HttpClientModule],
})
export class ProfessionalDetailsModule {}
