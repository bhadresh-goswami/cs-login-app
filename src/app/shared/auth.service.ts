import { Injectable } from '@angular/core';
import { userResponse } from '../models/user.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = 'https://localhost:44355/api/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private http: HttpClient, public router: Router) {}
  signUp() {}

  signIn(user: userResponse) {
    let api = this.endpoint + 'Login/SignIn';
    console.log(user);

    return this.http
      .post(api, user)
      .pipe(catchError(this.handleError))
      .subscribe((res: any) => {
        if (res == null) {
        } else {
          console.log(res.response.token);
          let token = res.response.token;
          localStorage.setItem('access_token', token);
        }
      });
  }

  getToken(): string {
    return localStorage.getItem('access_token') == null
      ? 'no token'
      : localStorage.getItem('access_token')!;
  }
  get IsLoggedIn(): boolean {
    if (this.getToken() == 'no token') {
      return false;
    }
    return true;
  }
  doLogOut() {}
  getUserProfile() {}

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
