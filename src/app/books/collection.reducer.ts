import { removeBook, addBook } from './books.actions';
import { createReducer, on } from "@ngrx/store";


export const initialState: readonly string[] = [];

export const collectionReducer = createReducer(
  initialState,
  on(removeBook, (state, { bookId }) => state.filter(id => id !== bookId)),
  on(addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;

    return [...state, bookId];
  })
)
