import { Book } from './books.model';

export interface BookState {
  books: Book[];
  collection: string[];
}
