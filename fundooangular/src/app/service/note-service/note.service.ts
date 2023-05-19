import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  bUrl: string = environment.baseApiUrl + 'api/Notes';
 tokenvalue:any;
  constructor(private httpservice: HttpserviceService) { 
    this.tokenvalue=localStorage.getItem('token');
  }
  AddNote(data:any){
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+this.tokenvalue
      })
    }
   return this.httpservice.postMethod(this.bUrl,data,true,headers);
  }
  getNotes(){
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+this.tokenvalue
      })
    }
    console.log(this.bUrl , this.tokenvalue);
    return this.httpservice.getMethod(this.bUrl,true,headers);
  }
}
