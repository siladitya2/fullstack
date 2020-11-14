import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export class HelloWorldBean {
  constructor(public message: String) { };
}
@Injectable({
  providedIn: 'root'
})
export class WelecomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(): any {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders(
      {
        Authorizaion: basicAuthHeaderString
      }
    )
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean', { headers });
  }

  executeHelloWorldBeanServiceWithPath(name): any {

    //   return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
    let username = 'mamai'
    let password = 'test'
    let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
    const headers = new HttpHeaders({ Authorization: basicAuthHeaderString });
    console.log(headers);

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`, { headers });
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'mamai';
    let password = 'test';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
