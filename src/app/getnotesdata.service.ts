import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GetnotesdataService {

  constructor(public http: Http) {}

  public fetchnotes(uid: any): Observable<any> {
    const url: string = 'http://localhost:8900/getbyid/' + uid;
    return this.http.get(url);
 }
}
