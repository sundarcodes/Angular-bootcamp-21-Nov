import { routes } from './app.routes';
import { BooksService } from './core/services/books.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BookCardComponent } from './book-card/book-card.component';
import { AddBookComponent } from './add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BookCardComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
