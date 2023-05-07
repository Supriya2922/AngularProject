import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpserviceService } from './httpservice.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  bUrl: string = environment.baseApiUrl + 'api/User/';

  constructor(private httpservice: HttpserviceService) { }
  registration(data: {}) {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpservice.postMethod(this.bUrl + 'Register', data, false, headers)
  }
login(data:{}){
  let headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  return this.httpservice.postMethod(this.bUrl + 'Login', data, false, headers)
}
forgetpassword(data:{}){
  let headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  return this.httpservice.postMethod(this.bUrl+'ForgetPassword',data,false,headers);
}
}
