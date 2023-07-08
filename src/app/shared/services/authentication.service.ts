import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  userIsLogged() {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem(environment.sessionStorage.token);
  }

  setToken(token: string): void {
    localStorage.setItem(environment.sessionStorage.token, token);
  }
}
