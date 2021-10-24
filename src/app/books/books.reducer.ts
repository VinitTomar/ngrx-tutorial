import { retrievedBookList } from './books.actions';
import { createReducer, on } from '@ngrx/store';
import { Book } from './books.model';


export const initialState: readonly Book[] = [];

export const booksReducder = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => books)
);
