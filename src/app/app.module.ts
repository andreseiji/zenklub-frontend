import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';
import { ProfessionalListComponent } from './professional-list/professional-list.component';

@NgModule({
  declarations: [AppComponent, ProfessionalDetailsComponent, ProfessionalListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
