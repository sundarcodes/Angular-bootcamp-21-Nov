import { BooksService } from './../core/services/books.service';
import { Book } from './../core/models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public bookService: BooksService) {

  }
  ngOnInit() {
  }

}
