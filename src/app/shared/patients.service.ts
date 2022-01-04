import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Abonnement, Patient, User } from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  endpoint: string = 'http://localhost:9898/bocobi';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http:HttpClient,
    public router:Router
  ) { }

  //

savePatients(user:Patient):Observable<Patient>{
    let api = this.endpoint+"/patient";
    return this.http.post<Patient>(api, user, {headers: this.headers});
  }  
//
getPatients():Observable<Patient>{
    let api ="http://localhost:9898/api/users";
    return this.http.get<Patient>(api, {headers:this.headers});
}


}
