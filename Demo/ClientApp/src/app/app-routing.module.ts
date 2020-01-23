import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { HospitalComponent } from './hospital/hospital.component';
import { HospitalAddEditComponent } from './hospital-add-edit/hospital-add-edit.component';


const routes: Routes = [
  { path: '', component: HospitalsComponent, pathMatch: 'full' },
  { path: 'hospital/:id', component: HospitalComponent },
  { path: 'add', component: HospitalAddEditComponent },
  { path: 'hospital/edit/:id', component: HospitalAddEditComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
