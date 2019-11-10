import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import {stringify} from "querystring";
import {Roles} from "./classes/roles";
import {Utilisateur} from "./classes/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   host2:string="http://localhost:8080";
   jwt:any=null;
   username:string;
   roles:Array<Roles>;
  constructor(private http:HttpClient) {}

    login(data){
      return this.http.post(this.host2+"/login",data,{observe:'response'});
    }
  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
// enegeiter dans le localstroty
    saveToken(jwt ){
      this.roles=jwt.roles;
      sessionStorage.setItem('token1', jwt);
      localStorage.setItem('token',JSON.stringify(jwt));
      this.jwt=jwt;

    }
    // elle permet de recuperer le username et le role a partir du Token
    parseJWT(){

        this.loadToken();
      if(this.jwt!=null){
      //let objJWT= JSON.parse(atob(this.jwt.replace("Bearer","").split('.')[1]))   //jwtHelper.decodeToken(this.jwt);
     let objJWT= JSON.parse(localStorage.getItem('token'));
      this.username=objJWT.username;
      this.roles=objJWT.roles;
      }
    }

    loadToken(){

      this.jwt= sessionStorage.getItem('token1');
      console.log(this.jwt);

    }
    isAdmin(){
      //this.parseJWT()
      for(let A of this.roles){
        if(A.roleName =='ADMIN') return true
      } return false;
    }

    isEmployer(){
      //
      for(let E of this.roles){
        if(E.roleName =='EMPLOYER') return true
      } return false;
    }
    isGetionnaire(){
   //this.parseJWT()
      for(let G of this.roles){
        if(G.roleName =='GETIONNAIRE') return true
      }
      return false;
    }
    isAuthenticated(){
    //this.parseJWT()
      return this.roles && (this.isAdmin() || this.isGetionnaire || this.isEmployer);
    }
    logout(){
     localStorage.removeItem('token');
     this.iniParams();
    }

    iniParams(){
    this.jwt=undefined;
     this.username=undefined;
     this.roles=undefined;
    }
}
