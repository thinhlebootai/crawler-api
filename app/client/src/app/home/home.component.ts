/**
 * Created by ThinhPC on 7/27/2017.
 */
import { Component, OnInit } from '@angular/core';
import { ShareService } from '../service/login.service';
@Component({
  selector: 'home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public title: string;
  public abstract: string;
  public topic: string;
  public content: string;
  public datetime: string;
  public image: string;
  constructor(private _shareSerice: ShareService) {}


  public ngOnInit() { }

  public send(domain) {
    // if (domain == '') {
    //   domain = 'https://www.heise.de/newsticker/meldung/Adobe-verabschiedet-sich-von-Flash-2020-ist-Schluss-3783264.html';
    // }
    this._shareSerice.sendDomain(domain).subscribe((res) => {
        try {
          let json = JSON.parse(res['_body']);
          this.title = json.title;
          this.abstract = json.abstract;
          this.topic = json.topic;
          this.content = json.content;
          this.datetime = json.datetime;
          this.image = json.image;
        } catch (ex) {

        }
    });

  }
}
