import { Book } from './../models/book';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/do';

@Injectable()
export class BooksService {

  books: Book[];
  baseAPIURL: string;
  constructor(private httpService: Http) {
    this.baseAPIURL = 'http://localhost:3000/api';
    this.fetchAllReads();
  }

  fetchAllReads() {
    // this.httpService.get('http://localhost:3000/api/index')
    // .subscribe(function(rsp) {
    //   // console.log(rsp.json());
    //   console.log(this);
    //   this.books = rsp.json();
    // });
    this.httpService.get(`${this.baseAPIURL}/index`)
    .subscribe( rsp => this.books = rsp.json());
  }

  createNewRead(title: string, desc: string) {
    return this.httpService.post(`${this.baseAPIURL}/create`, {
      title,
      description: desc
    })
    .do( rsp => {
      this.books.push(rsp.json());
    })
  }



}
