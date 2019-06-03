/*
 * @Author: Faisal
 * @Date: 2018-10-27 3:30:28
 * @Last Modified by: Faisal
 * @Last Modified time: 2018-10-27 3:30:28
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable()
export class AuthService {
  private BASE_URL = 'http://localhost:3000/api';

  constructor(private http: Http) {}

  public getToken(): string {
    return localStorage.getItem('token');
  }

  logIn(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/users/login`;
    return this.http.post(url, {email, password});
  }

  signUp(signupData): Observable<any> {
    const url = `${this.BASE_URL}/users`;
    return this.http.post(url, signupData);
  }
}
