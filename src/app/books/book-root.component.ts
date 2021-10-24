import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addBook, removeBook, retrievedBookList } from './books.actions';
import { Book } from './books.model';
import { selectBooks, selectBookCollection } from './books.selectors';
import { BooksService } from './books.service';

@Component({
  selector: 'app-book-root',
  templateUrl: './book-root.component.html',
  styleUrls: ['./book-root.component.scss']
})
export class BookRootComponent implements OnInit {

  books$ = this._store.select(selectBooks);
  bookCollection$ = this._store.select(selectBookCollection);

  onAdd(bookId: string) {
    this._store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this._store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private _booksService: BooksService,
    private _store: Store<any>
  ) {}

  ngOnInit() {
    this._booksService
      .getBooks()
      .subscribe((books: Book[]) => this._store.dispatch(retrievedBookList({ books })));
  }

}
