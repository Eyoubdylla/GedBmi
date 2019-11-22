import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {API_URLS} from "../../config/api.url.config";

@Injectable({
  providedIn: 'root'
})
export class DossierService {

  constructor(private http:HttpClient) {
  }


  getAllDossier():Observable<any> {
    return this.http.get(API_URLS.DOSSIER_URL);
  }
/*
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
*/
}

