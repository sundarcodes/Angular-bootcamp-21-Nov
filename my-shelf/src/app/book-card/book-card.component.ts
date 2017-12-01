import { Book } from './../core/models/book';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() detail: Book;
  @Output() deleteBook: EventEmitter<number>;
  constructor() {
    this.deleteBook = new EventEmitter();
   }

  ngOnInit() {
  }

  deleteItem(id: number) {
    this.deleteBook.emit(id);
  }

}
