import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Movie} from '../../models/movie';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService, private route: Router) { }

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies() {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
    });
  };

  editMovie(id: number){
    this.route.navigate(['edit-movie', id]);
  };

  deleteMovie(id: number){
    this.movieService.deleteMovie(id).subscribe(data => {
      this.getMovies();
    });
  };
}
