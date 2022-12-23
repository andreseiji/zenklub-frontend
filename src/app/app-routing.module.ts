import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalDetailsComponent } from './modules/professional-details/professional-details.component';
import { ProfessionalListComponent } from './modules/professional-list/professional-list.component';

const routes: Routes = [
  { path: '', component: ProfessionalListComponent },
  { path: 'professional/:id', component: ProfessionalDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
