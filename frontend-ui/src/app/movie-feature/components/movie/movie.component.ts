import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/movie';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  public getMovies() {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
    });
  }

}
