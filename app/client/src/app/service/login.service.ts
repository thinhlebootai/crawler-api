/**
 * Created by ThinhPC on 7/27/2017.
 */
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AppConfig } from '../service/config';
import 'rxjs/Rx';

@Injectable()
export class ShareService {
  public loginStatus: boolean = false;
  constructor(private http:Http) {
    this.http = http;
  }

  public onLogin(username, password): Observable<any> {
    let body = {username: username, password: password};
    return this.http.post(AppConfig.login, JSON.stringify(body), AppConfig.getExtHeader());
  }

  public sendDomain (domain): Observable<any> {
    let body = {domain: domain};
    return this.http.post(AppConfig.domain, JSON.stringify(body), AppConfig.getExtHeader());
  }

  public getAll(): Observable<any> {
    return this.http.get(`${AppConfig.getAll}/bootai`, AppConfig.getExtHeader());
  }

  public setLoginStatus(status) {
    this.loginStatus = status;
  }

}
