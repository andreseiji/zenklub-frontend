import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';
import { ProfessionalListComponent } from './professional-list/professional-list.component';

const routes: Routes = [
  { path: '', component: ProfessionalListComponent },
  { path: 'professional', component: ProfessionalDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
