import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Dossier} from "../../classes/dossier";

@Injectable({
  providedIn: 'root'
})
export class DossierService {
   base_url =environment.url + 'dossiers';
  constructor(private http:HttpClient) {
  }
  getAll() : Promise<Dossier[]>{
    const headers =  new HttpHeaders({
    });
    headers.append('Content-Type', 'application/json');
    return this.http.get<Dossier[]>(this.base_url+'/getAll', {headers: headers}).toPromise();
  }
  addDossier(dossier: Dossier){
    console.log('go');
    let headers = new Headers();
   //
    return this.http.post<Dossier>(this.base_url+'/add', dossier).toPromise();
  }
}
