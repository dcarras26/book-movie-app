import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  editMovie: Movie = {
    title: "Movie1",
    movieId: 10,
    director: "Dennis Carrasquillo",
    duration: "2hr 15m",
    rating: "R",
  }

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goToMovies() {
    this.route.navigate(['/movies']);
  }
}
