import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$!: Observable<number>;

  constructor(
    private _store: Store<{count: number}>
  ) { }

  ngOnInit(): void {
    this.count$ = this._store.select('count');
  }

  increment() {
    this._store.dispatch(increment());
  }

  decrement() {
    this._store.dispatch(decrement())
  }

  reset() {
    this._store.dispatch(reset());
  }

}
