import { isDate } from '@angular/common/src/i18n/format_date';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'FrontendGed';
  constructor(private router: Router ,private authService:AuthenticationService){}

  ngOnInit(): void {
   // this.authService.loadToken();
    //throw new Error("Method not implemented.");
  }
  isAdmin(){
    return this.authService.isAdmin();
  }
  isEmployer(){
    return this.authService.isEmployer();
  }

  isGetionnaire(){
    return this.authService.isGetionnaire();
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('/login')
  }

}

