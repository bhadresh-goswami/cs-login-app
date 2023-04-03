import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class TechService {
  endpoint: string = 'https://localhost:44355/api/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    public router: Router,
    private authServ: AuthService
  ) {}

  getTechs() {
    let api_key = this.authServ.getToken();
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${api_key}`,
    });
    console.log(this.headers);

    return this.http
      .get(this.endpoint + 'TechnologyStack/GetAllAsync', {
        withCredentials: true,
        headers: this.headers,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
