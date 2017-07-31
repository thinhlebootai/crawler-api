/**
 * Created by ThinhPC on 7/31/2017.
 */
/**
 * Created by ThinhPC on 7/27/2017.
 */
import { Component, OnInit } from '@angular/core';
import { ShareService } from '../service/login.service';
@Component({
  selector: 'listing',
  styleUrls: [ './listing.css' ],
  templateUrl: './listing.html'
})
export class ListingComponent implements OnInit {
  public title: string;
  public abstract: string;
  public topic: string;
  public content: string;
  public datetime: string;
  public image: string;
  public domain: string;
  rows = [];
  columns = [
    { name: 'title' },
    { name: 'abstract' },
    { name: 'content' },
    { name: 'topic' },
    { name: 'datetime' },
    { name: 'image' },
    { name: 'domain' }
  ];
  constructor(private _shareSerice: ShareService) {}


  public ngOnInit() {
    this.getAll();
  }

  public getAll () {
    this._shareSerice.getAll().subscribe((data)=> {
      this.rows = data.result;
    });
  }

}
