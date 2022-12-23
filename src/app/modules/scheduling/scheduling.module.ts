import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SchedulingComponent } from './scheduling.component';

@NgModule({
  declarations: [SchedulingComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [SchedulingComponent],
})
export class SchedulingModule {}
