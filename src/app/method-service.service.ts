import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MethodServiceService {

  constructor(private http: HttpClient) { }

  getMethod(url){
    return this.http.get(url);
  }

  postMethod(url, body){
    return this.http.post(url, body);
  }
}
