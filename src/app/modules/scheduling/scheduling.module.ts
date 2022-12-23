import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SchedulingComponent } from './scheduling.component';

@NgModule({
  declarations: [SchedulingComponent],
  imports: [CommonModule],
  exports: [SchedulingComponent],
})
export class SchedulingModule {}
