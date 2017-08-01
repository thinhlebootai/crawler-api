import { Component } from '@angular/core';

@Component({
  selector: 'no-content',
  styleUrls: [ './no-content.component.css' ],
  template: `
    <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="error-template">
                <h1>Oops!</h1>
                <h2>404 Not Found</h2>
                <div class="error-details">
                    Sorry, an error has occured, Requested page not found!
                  <a routerLink="">Goto login page</a>
                </div>

            </div>
        </div>
    </div>
</div>
  `
})
export class NoContentComponent {

}
