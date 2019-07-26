import { Component, OnInit } from '@angular/core';
import {SrvregistrationService} from "../srvregistration.service";
// importer le user
import {User} from "../model/mode.user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = new User();
  errorMessage: string;
  constructor(private srvregistrationService:SrvregistrationService,private router: Router ) { }

  ngOnInit() {
  }
  onregistration(data) {
    this.srvregistrationService.registration(this.user)
      .subscribe(data => {
        this.router.navigateByUrl("/gestionUser");
        console.log(data);
      },err =>{
        console.log(err);
        console.log(this.user);
        console.log(data);
        this.errorMessage="username alreadyeeee exist";
      })
  }

  cencel(){
    this.router.navigateByUrl('/gestionUser');
  }

    // register() {
    //   this.accountService.createAccount(this.user).subscribe(data => {
    //       this.router.navigate(['/login']);
    //     }, err => {
    //       console.log(err);
    //       this.errorMessage = "username already exist";
    //     }
    //   )
    // }

}
