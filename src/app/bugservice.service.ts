import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bug } from './bug';

import { HttpHeaders } from '@angular/common/http';
 
//import { Bug } from './bug'

@Injectable({
  providedIn: 'root'
})
export class BugserviceService {
  private apiServerUrl ='http://127.0.0.1:8080';
  private _bugId ;
  constructor(private http:HttpClient) { }



  public headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': 'http://localhost:8080', 'Access-Control-Allow-Credentials': 'true'});


  public getBug(bugId : number) : Observable<Bug[]>{
    console.log(bugId);
    console.log(this.apiServerUrl);
    var obj = bugId;
    this._bugId = Object.values(bugId);
    //return this.http.get<Bug[]>(`${this.apiServerUrl}/search/${bugId}`);
    return this.http.get<Bug[]>(`${this.apiServerUrl}/search/`+`${this._bugId}`);
  }

  public createBug(bug : Bug) : Observable<Bug>{
    console.log(bug);
    return this.http.post<Bug>(`${this.apiServerUrl}/createBug`,bug, {headers: this.headers});
  }

  public deleteBug(bugId : number) : Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/deleteBug/${bugId}`);
  }
}
