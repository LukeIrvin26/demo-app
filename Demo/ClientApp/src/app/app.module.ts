import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { HospitalComponent } from './hospital/hospital.component';
import { HospitalAddEditComponent } from './hospital-add-edit/hospital-add-edit.component';
import { HospitalService } from './services/hospital.service';

@NgModule({
  declarations: [
    AppComponent,
    HospitalsComponent,
    HospitalComponent,
    HospitalAddEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    HospitalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
