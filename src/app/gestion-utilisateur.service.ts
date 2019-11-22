import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";
import {Utilisateur} from "./model/utilisateur";


@Injectable({
  providedIn: 'root'
})
export class GestionUtilisateurService {
  public host1:string="http://localhost:8080"
  //public  Api = this.host1+"/listUser";
  constructor(private http:HttpClient, private authService:AuthenticationService) { }

  getAllUtilisateurs(){
    return this.http.get(this.host1+"/uitisateurs")
  }
  removeUser(url){
    let headers = new HttpHeaders({'authorization':this.authService.jwt})
    return this.http.delete(url,{headers:headers})
  }
  GetRessource(url):Observable<Utilisateur>{
    // @ts-ignore
    return this.http.get(url);
  }
  UpdateRessource(url,data){
    return this.http.put(url,data);
  }
  /*parseJWT(){
    let jwtHelper=new JwtHelperService();
    let objJWT=jwtHelper.decodeToken(this.jwt);
    this.username=objJWT.obj;
    this.roles=objJWT.roles;
  }
  loadToken(){
    this.jwt=localStorage.getItem('Token')
    this.parseJWT();
  }*/
}
