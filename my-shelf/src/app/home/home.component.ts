import { BooksService } from './../core/services/books.service';
import { Book } from './../core/models/book';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public bookService: BooksService, private router: Router) {

  }
  ngOnInit() {
  }

  gotoNewForm() {
    this.router.navigate(['/new']);
  }

  deleteBook(id: number) {
    console.log(`Got id ${id}`);
    this.bookService.deleteBook(id);
  }

}
