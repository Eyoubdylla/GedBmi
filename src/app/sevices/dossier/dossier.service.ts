import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {API_URLS} from "../../config/api.url.config";

@Injectable({
  providedIn: 'root'
})
export class DossierService {

  constructor(private http:HttpClient) {
  }

  getAllDossier():Observable<any>{
    return this.http.get(API_URLS.DOSSIER_URL);
  }

}
