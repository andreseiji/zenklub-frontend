import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProfessionalProfileModule } from '../professional-profile/professional-profile.module';
import { ProfessionalListComponent } from './professional-list.component';

@NgModule({
  declarations: [ProfessionalListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ProfessionalProfileModule,
  ],
})
export class ProfessionalListModule {}
