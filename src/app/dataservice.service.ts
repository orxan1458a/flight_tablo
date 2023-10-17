import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Aviation } from './Aviation';
import { inject } from '@angular/core/testing';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class DataserviceService {

  constructor(private http: HttpClient) { }
  _url1 = 'http://api.aviationstack.com/v1/flights?access_key=5eed47578c363a756496a6a6b76efd23';
  _url = 'https://api.coinlore.net/api/ticker/?id=90,80';
  getDatas(): Observable<any> {
    return this.http.get<any>(this._url1);
  }


}
