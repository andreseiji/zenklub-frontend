import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessionalDetailsModule } from './modules/professional-details/professional-details.module';
import { ProfessionalListModule } from './modules/professional-list/professional-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfessionalDetailsModule,
    ProfessionalListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
