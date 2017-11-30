import { AddBookComponent } from './add-book/add-book.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'new',
        component: AddBookComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
]