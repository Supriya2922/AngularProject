import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) { }

  postMethod(url: string, payload: {}, token: boolean = false, httpOptions: any) {
    return this.http.post(url, payload, token && httpOptions)
  }
  putMethod() {

  }
  getMethod(url: string, token: boolean, httpOptions: any) {
    return this.http.get(url, httpOptions)
  }
  deleteMethod() {

  }
}
