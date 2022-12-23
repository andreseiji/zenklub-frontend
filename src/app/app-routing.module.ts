import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalDetailsComponent } from './pages/professional-details/professional-details.component';
import { ProfessionalListComponent } from './pages/professional-list/professional-list.component';

const routes: Routes = [
  { path: '', component: ProfessionalListComponent },
  { path: 'professional/:id', component: ProfessionalDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
