import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {any} from "codelyzer/util/function";
import {Observable} from "rxjs";
import {API_URLS} from "../../config/api.url.config";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  constructor(private http:HttpClient) { }

  getAllDocuments():Observable<any>{
   return this.http.get(API_URLS.DOCUMENT_URL);
  }
  getDocument(id: number):Observable<Object>{
    return this.http.get(`${API_URLS.DOCUMENT_URL}/${id}`);
  }

  createDocument(document: Object): Observable<Object>{
    return this.http.post(`${API_URLS.DOCUMENT_URL}`,document);
  }

  updateDocument(id: number, value: any): Observable<Object> {
    return this.http.put(`${API_URLS.DOCUMENT_URL}/${id}`, value);
  }

  // getResource(url){
  //   return this.http.get(url);
  // }
  // deleteRessource(url){
  //   return this.http.delete(url);
  // }



}
