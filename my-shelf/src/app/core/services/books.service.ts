import { Book } from './../models/book';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BooksService {

  books: Book[];
  constructor(private httpService: Http) {
    this.fetchAllReads();
  }

  fetchAllReads() {
    // this.httpService.get('http://localhost:3000/api/index')
    // .subscribe(function(rsp) {
    //   // console.log(rsp.json());
    //   console.log(this);
    //   this.books = rsp.json();
    // });
    this.httpService.get('http://localhost:3000/api/index')
    .subscribe( rsp => this.books = rsp.json());
  }

}
