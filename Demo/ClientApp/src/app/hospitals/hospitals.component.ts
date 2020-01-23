import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HospitalService } from '../services/hospital.service';
import { Hospital } from '../models/hospital';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {
  hospitals$: Observable<Hospital[]>;

  constructor(private hospitalService: HospitalService) { }

  ngOnInit() {
    this.loadHospitals();
  }

  loadHospitals() {
    this.hospitals$ = this.hospitalService.getHospitals();
  }

  delete(hospitalId) {
    const ans = confirm('Do you want to delete hospital with id: ' + hospitalId);
    if (ans) {
      this.hospitalService.deleteHospital(hospitalId).subscribe((data) => {
        this.loadHospitals();
      });
    }
  }

}
