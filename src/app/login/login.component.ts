import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthenticationService ,private router: Router, private cookieServive: CookieService, ) { }

  ngOnInit() {
  }
  onLogin(data){
    const token = btoa(data.username + ':' + data.password);
    this.cookieServive.set('tokenlogin', token);
    this.authService.login(data)
    .subscribe(resp=>{
      this.authService.saveToken(resp.body);
      this.router.navigateByUrl("/ListeDossier");
    })
  }
  // login(){
  //   this.authService.logIn(this.user)
  //     .subscribe(data=>{
  //         this.router.navigate(['/profile']);
  //       },err=>{
  //         this.errorMessage="error :  Username or password is incorrect";
  //       }
  //     )
  // }

}
