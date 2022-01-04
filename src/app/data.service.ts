import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HomeModel } from '../models/home';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getHomes() {
    return this.httpClient.get("assets/data.json");
  }


  getAll(): Observable<HomeModel[]> {
    return this.httpClient.get<HomeModel[]>("assets/data.json");
  }

}
