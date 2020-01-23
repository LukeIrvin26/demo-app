import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Hospital } from '../models/hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/hospitals/';
  }

  getHospitals(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(this.myAppUrl + this.myApiUrl).pipe(retry(1), catchError(this.errorHandler));
  }

  getHospital(hospitalId: number): Observable<Hospital> {
    return this.http.get<Hospital>(this.myAppUrl + this.myApiUrl + hospitalId).pipe(retry(1), catchError(this.errorHandler));
  }

  saveHospital(hospital): Observable<Hospital> {
    return this.http.post<Hospital>(this.myAppUrl + this.myApiUrl, JSON.stringify(hospital), this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandler));
  }

  updateHospital(hospitalId: number, hospital): Observable<Hospital> {
    return this.http.put<Hospital>(this.myAppUrl + this.myApiUrl + hospitalId, JSON.stringify(hospital), this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandler));
  }

  deleteHospital(hospitalId: number): Observable<Hospital> {
    return this.http.delete<Hospital>(this.myAppUrl + this.myApiUrl + hospitalId).pipe(retry(1), catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
