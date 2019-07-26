import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthenticationService ,private router: Router ) { }

  ngOnInit() {
  }
  onLogin(data){
    this.authService.login(data)
    .subscribe(resp=>{
      let jwt=resp.headers.get('Authorization');
      this.authService.saveToken(jwt);
      console.log(jwt)
      this.router.navigateByUrl("/");
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
