import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cardTitle!: Observable<string>;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    this.cardTitle = this._router.events
      .pipe(
        filter((event: Event) => event instanceof NavigationEnd),
        map((event: Event) => {
          const endEvent = (event as NavigationEnd);
          switch (endEvent.url) {
            case '/counter':
              return 'Counter example';
            case '/books':
              return 'Books example';
            default:
              return '';
          }
        })
      );
  }

}
