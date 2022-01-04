import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint: string = 'http://localhost:9898/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http:HttpClient,
    public router:Router
  ) { }

  //Sign Up Method

  signUp(user:User):Observable<User>{
    let api = this.endpoint+"/init";

    return this.http.post<User>(api, 
      {username:user.username, password:user.password, email:user.email},
       {headers: this.headers});
  }  
  
  //Sign In Method
  signIn(user:User){
    let api = "http://localhost:9898/api/login";
    console.log(user);
    
    return this.http.post<any>(api, 
      {username:user.username, password:user.password},
      {headers: this.headers})
        .subscribe((res)=>{
          console.log(res);
          
        })
  }

//Log Out Method
LogOut(){
  let removeToken = localStorage.removeItem('access_token');

  if(removeToken == null){
    this.router.navigate(['log-in'])
  }
}

//to know if the user is logged or not
isLoggedIn():boolean{
  let authToken = localStorage.getItem('access_token');
  return authToken!=null;
}
getToken(){
  return localStorage.getItem("access_token");
}
// profile de l'utilisateur 
getUserProfile(id: string):Observable<any>{
  let api = this.endpoint+"/user/"+id;

  return this.http.get(api, {headers:this.headers}).pipe(
        map((res) => {
          return res||{}
        }), 
        catchError(this.handleError)
    )
}

// capture des erreurs
handleError(error: HttpErrorResponse) {
  let msg = "";
  if(error.error instanceof ErrorEvent){
    //erreur du cote client
    msg = error.error.message;
  } else {
    // erreur cote serveur
    msg = "Error Code: "+error.status+"\n Message: "+error.message;
  }
  return throwError(msg);
}

}
