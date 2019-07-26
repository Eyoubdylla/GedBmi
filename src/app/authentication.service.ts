import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   host2:string="http://localhost:8080";
   jwt:string=null;
   username:string;
   roles:Array<any>;
  constructor(private http:HttpClient) {}

    login(data){
      return this.http.post(this.host2+"/login",data,{observe:'response'})
    }
// enegeiter dans le localstroty
    saveToken(jwt: string){
      localStorage.setItem('token',jwt);
      this.jwt=jwt;

    }
    // elle permet de recuperer le username et le role a partir du Token
    parseJWT(){

        this.loadToken()
      if(this.jwt!=null){
      let objJWT= JSON.parse(atob(this.jwt.replace("Bearer","").split('.')[1]))   //jwtHelper.decodeToken(this.jwt);
      this.username=objJWT.sub;
      this.roles=objJWT.roles;
      }
    }

    loadToken(){
      this.jwt=localStorage.getItem('token')
    }
    isAdmin(){
    this.parseJWT()
      for(let A of this.roles){
        if(A.authority =='ADMIN') return true
      } return false;
    }
    
    isEmployer(){
      this.parseJWT()
      for(let E of this.roles){
        if(E.authority =='EMPLOYER') return true 
      } return false;
    }
    isGetionnaire(){
      this.parseJWT()
      for(let G of this.roles){
        if(G.authority =='GETIONNAIRE') return true
      }
      return false;
    }
    isAuthenticated(){
      this.parseJWT()
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
