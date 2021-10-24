import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookRootComponent } from './book-root.component';

const routes: Routes = [
  {path: '', component: BookRootComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
