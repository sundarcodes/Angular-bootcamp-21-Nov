import { Book } from './../models/book';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  books: Book[];
  constructor() {
    let uniqueId = 1;
    this.books = [
      {
        title: 'Refactoring',
        description: 'Techinques to refactor your code',
        id: uniqueId++
      },
      {
        title: 'Functional Programming',
        description: 'Practical introduction to functional programming',
        id: uniqueId++
      },
      {
        title: 'No SQL Distilled',
        description: 'A brief guide to emerging world of polygot persistence',
        id: uniqueId++
      },
      {
        title: 'Redux',
        description: 'A Cartoon introduction to Redux',
        id: uniqueId++
      },
      {
        title: 'Head First Design Patterns',
        description: 'Your Brain on Design Patterns',
        id: uniqueId++
      },
      {
        title: 'Game Programming Patterns',
        description: 'Design Patterns for Game development',
        id: uniqueId++
      }
    ];

  }

}
