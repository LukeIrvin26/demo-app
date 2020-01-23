import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HospitalService } from '../services/hospital.service';
import { Hospital } from '../models/hospital';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-hospital-add-edit',
  templateUrl: './hospital-add-edit.component.html',
  styleUrls: ['./hospital-add-edit.component.scss']
})
export class HospitalAddEditComponent implements OnInit {
  form: FormGroup;
  actionType: string;
  formName: string;
  formAddress: string;
  formPhoneNumber: string;
  hospitalId: number;
  errorMessage: any;
  existingHospital: Hospital;

  constructor(private hospitalService: HospitalService, private formBuilder: FormBuilder,
              private avRoute: ActivatedRoute, private router: Router) { 
                const idParam = 'id';
                this.actionType = 'Add';
                this.formName = 'name';
                this.formAddress = 'address';
                this.formPhoneNumber = 'phoneNumber';
                if (this.avRoute.snapshot.params[idParam]) {
                  this.hospitalId = this.avRoute.snapshot.params[idParam];
                }

                this.form = this.formBuilder.group(
                  {
                    id: 0,
                    name: ['', [Validators.required]],
                    address: ['', [Validators.required]],
                    phoneNumber: ['', [Validators.required]]
                  }
                );
              }

  ngOnInit() {
    if (this.hospitalId > 0) {
      this.actionType = 'Edit';
      this.hospitalService.getHospital(this.hospitalId).subscribe(data => {
        this.existingHospital = data,
        this.form.controls[this.formName].setValue(data.name),
        this.form.controls[this.formAddress].setValue(data.address),
        this.form.controls[this.formPhoneNumber].setValue(data.phoneNumber)
      });
    }
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      const hospital: Hospital = {
        name: this.form.get(this.formName).value,
        address: this.form.get(this.formAddress).value,
        phoneNumber: this.form.get(this.formPhoneNumber).value
      };

      this.hospitalService.saveHospital(hospital).subscribe((data) => {
        this.router.navigate(['/hospital', data.id]);
      });
    }

    if (this.actionType === 'Edit') {
      const hospital: Hospital = {
        id: this.existingHospital.id,
        name: this.form.get(this.formName).value,
        address: this.form.get(this.formAddress).value,
        phoneNumber: this.form.get(this.formPhoneNumber).value
      };

      this.hospitalService.updateHospital(hospital.id, hospital).subscribe((data) => {
        this.router.navigate(['/hospital', data.id]);
      });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  get name() { return this.form.get(this.formName); }
  get address() { return this.form.get(this.formAddress); }
  get phoneNumber() { return this.form.get(this.formPhoneNumber); 
  }

}
