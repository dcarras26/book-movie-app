import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponentComponent } from './user-feature/components/user-component/user-component.component';
import { BookComponent } from './book-feature/components/book/book.component';
import { MovieComponent } from './movie-feature/components/movie/movie.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateBookComponent } from './book-feature/components/create-book/create-book.component';
import { CreateMovieComponent } from './movie-feature/components/create-movie/create-movie.component';
import { EditAccountComponent } from './edit-account/edit-account/edit-account.component';
import { CreateUserComponent } from './user-feature/components/create-user/create-user.component';
import { EditBookComponent } from './book-feature/components/edit-book/edit-book.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    BookComponent,
    NavbarComponent,
    MovieComponent,
    HomeComponent,
    CreateBookComponent,
    CreateMovieComponent,
    CreateUserComponent,
    EditAccountComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
