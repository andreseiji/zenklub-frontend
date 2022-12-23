import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProfessionalListComponent } from './professional-list.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [ProfessionalListComponent],
  imports: [CommonModule, HttpClientModule, AppRoutingModule],
})
export class ProfessionalListModule {}
