import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book-feature/components/book/book.component';
import { CreateBookComponent } from './book-feature/components/create-book/create-book.component';
import { CreateMovieComponent } from './movie-feature/components/create-movie/create-movie.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie-feature/components/movie/movie.component';
import { UserComponentComponent } from './user-feature/components/user-component/user-component.component';
import { CreateUserComponent } from './user-feature/components/create-user/create-user.component';
import { EditAccountComponent } from './edit-account/edit-account/edit-account.component';
import { EditBookComponent } from './book-feature/components/edit-book/edit-book.component';
import { EditMovieComponent } from './movie-feature/components/edit-movie/edit-movie.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'users', component: UserComponentComponent},
  {path: "create-users", component: CreateUserComponent},
  {path: 'books', component: BookComponent},
  {path: "create-books", component: CreateBookComponent},
  {path: 'edit-book', component: EditBookComponent},
  {path: 'movies', component: MovieComponent},
  {path: "create-movies", component: CreateMovieComponent},
  {path: "edit-movie", component: EditMovieComponent},
  {path: 'home', component: HomeComponent},
  {path: 'edit-account', component: EditAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
