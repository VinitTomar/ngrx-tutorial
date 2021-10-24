import { BookRootComponent } from './book-root.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { booksReducder } from './books.reducer';
import { collectionReducer } from './collection.reducer';
import { BookCollectionComponent } from './book-collection.component';
import { BookListComponent } from './book-list.component';


@NgModule({
  declarations: [
    BookRootComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature('books', booksReducder),
    StoreModule.forFeature('collection', collectionReducer),
    MatCardModule,
    MatButtonModule
  ]
})
export class BooksModule { }
