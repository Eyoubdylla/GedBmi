import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
    return this.http.get<Dossier[]>(this.base_url+'/getAll').toPromise();
  }
  addDossier(dossier: Dossier){
    console.log('go');
    return this.http.post<Dossier>(this.base_url+'/add', dossier);
  }
}
