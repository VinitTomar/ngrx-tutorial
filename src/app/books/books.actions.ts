import { Book } from './books.model';
import { createAction, props } from '@ngrx/store';


export const addBook = createAction(
  '[Book List] Add Book',
  props<{bookId: string}>()
);

export const removeBook = createAction(
  '[Book collection] Remove Book',
  props<{bookId: string}>()
);

export const retrievedBookList = createAction(
  '[Book List/API] Retriveve Book Success',
  props<{books: readonly Book[]}>()
);
