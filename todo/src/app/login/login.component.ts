import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private basicAuthenticationService: BasicAuthenticationService, private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  userName;
  passWord;
  isValidLogin = false;
  errorMessage = "invalid credential";

  login(): void {
    if (this.hardcodedAuthenticationService.authenticate(this.userName, this.passWord)) {
      this.isValidLogin = false;
      this.router.navigate(['welcome', this.userName]);
    }
    else {
      this.isValidLogin = true;
    }
  }

  handleBasicAuthentication() {
    this.basicAuthenticationService.executeAuthenticationService(this.userName, this.passWord).subscribe(response => {
      this.isValidLogin = false;
      this.router.navigate(['welcome', this.userName]);
    },
      error => {
        this.isValidLogin = true;
      })
  }

  handleJWTAuthentication() {
    this.basicAuthenticationService.executeAuthenticationService(this.userName, this.passWord).subscribe(response => {
      this.isValidLogin = false;
      this.router.navigate(['welcome', this.userName]);
    },
      error => {
        this.isValidLogin = true;
      })
  }
}
