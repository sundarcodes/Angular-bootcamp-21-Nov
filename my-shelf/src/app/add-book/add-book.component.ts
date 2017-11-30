import { Router } from '@angular/router';
import { BooksService } from './../core/services/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookTitle: string;
  bookDesc: string;
  constructor(private backendService: BooksService,
  private router: Router) {
    this.bookTitle = '';
   }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Going to submit');
    this.backendService.createNewRead(this.bookTitle, this.bookDesc)
    .subscribe(x => {
      this.router.navigate(['/home']);
    })
  }

}
