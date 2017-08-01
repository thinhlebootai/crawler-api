/**
 * Created by ThinhPC on 7/27/2017.
 */
import { Component, OnInit } from '@angular/core';
import { ShareService } from '../service/login.service';
import { Response } from "@angular/http";
import { Router } from "@angular/router";
import { md5 } from './md5';

@Component({
  selector: 'login',
  styleUrls: [ './login.css' ],
  templateUrl: './login.html'
})
export class LoginComponent implements OnInit {
  public onLoginStatus: boolean = false;
  constructor( private _shareService: ShareService, private _router: Router) {}

  public ngOnInit() { }

  public onLogin(username, password){
    this.onLoginStatus  = true;
    setTimeout(() => {
      this.onLoginStatus  = false;
    }, 3000);
    let e = md5(password);
    this._shareService.onLogin(username, e).subscribe((res) => {
      if ( res instanceof Response){
        try{
          let json = JSON.parse(res['_body']);
          if (json.result == 'success') {
            this._router.navigateByUrl('/demo');
            this._shareService.setLoginStatus(true);
          }
        } catch (ex) {
          // pass
        }
      }
    });
  }
}
