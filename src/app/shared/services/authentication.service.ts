import { ISignIn } from './../interfaces/sign-in.interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { endpoints } from '../constants/endpoints.constant';
import { HttpClient } from '@angular/common/http';
import { IToken } from '../interfaces/token.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getToken(): string | null {
    return sessionStorage.getItem(environment.sessionStorage.token);
  }

  setToken(token: string): void {
    sessionStorage.setItem(environment.sessionStorage.token, token);
  }

  userIsLogged() {
    return !!this.getToken();
  }

  signIn(email: string, password: string): Observable<IToken> {
    const endpoint = this.baseUrl + endpoints.auth.signIn;

    const userInfo: ISignIn = {
      email: email,
      password: password
    }

    return this.http.post<IToken>(endpoint, userInfo)
  }

  logout() {
    sessionStorage.removeItem(environment.sessionStorage.token);
  }


}
