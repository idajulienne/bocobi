import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Abonnement, Patient, User } from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  endpoint: string = 'http://localhost:9898/bocobi';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http:HttpClient,
    public router:Router
  ) { }

  //

saveAbonnement(user:Abonnement):Observable<Abonnement>{
    let api = this.endpoint+"/abonnement";
    return this.http.post<Abonnement>(api, user, {headers: this.headers});
  }  
//
getAbonnements():Observable<Abonnement>{
    let api =this.endpoint+"/abonnements";
    return this.http.get<Abonnement>(api, {headers:this.headers});
}


}
