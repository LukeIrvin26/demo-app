import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HospitalService } from '../services/hospital.service';
import { Hospital } from '../models/hospital';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit {
  hospital$: Observable<Hospital>;
  hospitalId: number;

  constructor(private hospitalService: HospitalService, private avRoute: ActivatedRoute) { 
    const idParam = 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.hospitalId = this.avRoute.snapshot.params[idParam];
    }
  }

  ngOnInit() {
    this.loadHospital();
  }

  loadHospital() {
    this.hospital$ = this.hospitalService.getHospital(this.hospitalId);
  }

}
