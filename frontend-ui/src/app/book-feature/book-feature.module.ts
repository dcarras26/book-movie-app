import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book/book.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';



@NgModule({
  declarations: [
    BookComponent,
    CreateBookComponent,
    EditBookComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookFeatureModule { }
