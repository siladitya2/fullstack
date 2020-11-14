import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
export const CLOUD_URL:string = 'https://adityarocks-app-interested-kookaburra.cfapps.io/basicauth';
export const LOCAL_URL:string="http://localhost:8080/basicauth";

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  isUserLogggedIn(): boolean {
    let user = sessionStorage.getItem("authenticatedUser");
    if (!(user === null)) {
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }

  public executeAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
    const headers = new HttpHeaders({ Authorization: basicAuthHeaderString });
    console.log(headers);

    return this.http.get<AuthenticationBean>(CLOUD_URL, {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('token', basicAuthHeaderString);
        }
      )
    );
  }

  public executeJWTAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
    const headers = new HttpHeaders({ Authorization: basicAuthHeaderString });
    console.log(headers);

    return this.http.post<any>(CLOUD_URL, {
       username,
       password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('token', `Bearer ${data.token}`);
        }
      )
    );
  }

  getAuthenticatedToekn() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('token');
    }
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser');
  }
}
export class AuthenticationBean {
  constructor(public message: string) {

  }
}