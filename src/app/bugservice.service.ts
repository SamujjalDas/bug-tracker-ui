import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bug } from './bug';
import { UserDetails } from './userdetails';

import { HttpHeaders } from '@angular/common/http';

//import { Bug } from './bug'

@Injectable({
  providedIn: 'root'
})
export class BugserviceService {
  private apiServerUrl = 'http://127.0.0.1:8080';
  private _bugId;
  username = 'dummy';
  password = 'dummy';

  constructor(private http: HttpClient) { }

  //headers= new HttpHeaders();

  //const headers = new HttpHeaders({Authorization: 'Basic '+btoa(this.username+":"+this.password)});
  //headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  //headers.append('Access-Control-Allow-Credentials', 'true');

  //headers= new HttpHeaders()
  //.set('Authorization', 'Basic '+(this.username+":"+this.password))
  //  .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*')
  // .set('Access-Control-Allow-Credentials', 'true')
  ;

  public login(userDetails: UserDetails) {
    this.username = userDetails.username;
    this.password = userDetails.password;
    console.log(this.password);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ":" + this.password) });
    console.log(headers);
    return this.http.get<Bug>(`${this.apiServerUrl}/loginApp`, { headers, responseType: 'text' as 'json' });
  }

  public getBug(bugId: number): Observable<Bug[]> {
    console.log(bugId);
    console.log(this.apiServerUrl);
    var obj = bugId;
    this._bugId = Object.values(bugId);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ":" + this.password) });
    //return this.http.get<Bug[]>(`${this.apiServerUrl}/search/${bugId}`);
    return this.http.get<Bug[]>(`${this.apiServerUrl}/search/` + `${this._bugId}`, { headers });
  }

  public createBug(bug: Bug): Observable<Bug> {
    console.log(bug);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ":" + this.password) });
    return this.http.post<Bug>(`${this.apiServerUrl}/createBug`, bug, { headers });
  }

  public deleteBug(bugId: number): Observable<void> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ":" + this.password) });
    return this.http.delete<void>(`${this.apiServerUrl}/deleteBug/${bugId}`, { headers });
  }
}
