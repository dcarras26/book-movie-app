import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  editBook: Book = new Book();
  id: number;
  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe(data => {
      this.editBook = data;

    }, error => console.log(error));
  }

  onSubmit() {
    this.bookService.updateBook(this.id, this.editBook).subscribe(data => {
      this.goToBookList();
    }, error => console.log(error));
  }

  goToBookList(){
    this.router.navigate(['/books']);
  }
  

}
