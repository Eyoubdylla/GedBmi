import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URLS} from "../../config/api.url.config";

@Injectable({
  providedIn: 'root'
})
export class GroupsDocService {

  constructor(private http:HttpClient) { }

  getAllGroupsDoc():Observable<any>{
    return this.http.get(API_URLS.GROUPSDOC_URL);
  }
}
