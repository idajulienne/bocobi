import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { UserService } from "./user.service"

@Injectable()

export class AuthInterceptor implements HttpInterceptor{
    constructor(private authService:UserService){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const authToken = this.authService.getToken();
        console.log(222222);
        
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer "+authToken
            }
        });
        return next.handle(req);
    }
}