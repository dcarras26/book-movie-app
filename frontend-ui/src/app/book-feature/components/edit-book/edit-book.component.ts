import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  editBook: Book = {
    title: "Book1",
    bookId: 7,
    author: "Me",
    isbn: "98043534"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
