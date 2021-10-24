import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Book } from './books.model';
import { BookState } from './books.state';

export const selectBooks = createSelector(
  (state: BookState) => state.books,
  (books: Array<Book>) => books
);

export const selectCollectionState = createFeatureSelector<
  BookState,
  string[]
>("collection");

  export const selectBookCollection = createSelector(
    selectBooks,
    selectCollectionState,
    (books: Array<Book>, collection: Array<string>) => {
      return collection.map((id) => books.find((book) => book.id === id));
    }
  );
