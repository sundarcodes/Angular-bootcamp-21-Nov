import { BooksService } from './core/services/books.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BookCardComponent } from './book-card/book-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BookCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ BooksService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
