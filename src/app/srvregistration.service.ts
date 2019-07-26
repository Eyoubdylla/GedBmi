import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./model/mode.user";

@Injectable({
  providedIn: 'root'
})
export class SrvregistrationService {
host3:string="http://localhost:8080";
  constructor(private http:HttpClient) {

  }
  registration(user:User){
    return this.http.post(this.host3+"/register",user);
  }

  // createAccount(user:User){
  //   return this.http.post(AppComponent.API_URL+'/account/register',user)
  //     .map(resp=>resp.json());
  // }
}
