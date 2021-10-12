import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie/movie.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';



@NgModule({
  declarations: [
    MovieComponent,
    CreateMovieComponent,
    EditMovieComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MovieFeatureModule { }
