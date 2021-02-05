import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiURL } from '../../environments/environment';
import { Singup} from '../shared/Singup';
import {SingupToken} from '../shared/SingupToken';
import { Observable, throwError ,BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private currentUserSubject: BehaviorSubject<SingupToken>;
    public currentUser: Observable<SingupToken>;


   constructor(private http: HttpClient, private router:Router,private cookieService:CookieService) {

    this.currentUserSubject = new BehaviorSubject<SingupToken>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

   }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


   createUser(user:Singup){
      return this.http.post<Singup>(`${apiURL}`+ `api/Students/Crear`,user,this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
   }
   loginUser(user:Singup){
    return this.http.post<Singup>(`${apiURL}api/Students/Login`,user,this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

   handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
      console.log(errorMessage);
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      console.log(errorMessage);
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }


}
