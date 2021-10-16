import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Book} from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  editBook(id: number){
    this.router.navigate(['edit-book', id]);
  }

  deleteBook(id: number){
    this.bookService.deleteBook(id).subscribe(data => {
      this.getBooks();
    })
  }
}
