import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  
  book: Book = new Book();

  constructor(private route: Router, private bookService: BookService) { }

  ngOnInit(): void {
  }

  saveBook() {
    this.bookService.createBook(this.book).subscribe(data => {
      console.log(this.book);
      this.goToBooks();
    },
    error => console.log(error));
  }

  goToBooks() {
    this.route.navigate(['books']);
  }

  onSubmit() {
      console.log(this.book);
      this.saveBook();
  }
}
