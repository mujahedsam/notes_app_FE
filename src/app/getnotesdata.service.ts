import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';

interface ResponseInt {
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class GetnotesdataService {

  constructor(public http: HttpClient) { }

  public fetchnotes(uid: any): Observable<any> {
    const url: string = 'http://localhost:8900/getbyid/' + uid;
    return this.http.get(url);
  }

  public savenotes(content, note_details): Observable<HttpResponse<ResponseInt>> {
    return this.http.post<HttpResponse<ResponseInt>>('http://localhost:8900/save', {
      uid: note_details.uid,
      name: note_details.name,
      content: content
    });
  }
}
