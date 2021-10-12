import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  movie: Movie = new Movie();

  constructor(private route: Router, private movieService: MovieService) { }

  ngOnInit(): void {
  }

  saveMovie(){
    this.movieService.createMovie(this.movie).subscribe(data => {
      console.log(data);
      this.goToMovieList();
    },
    error => console.log(error));
  }

  goToMovieList() {
    this.route.navigate(['movies']);
  }

  onSubmit() {
    console.log(this.movie);
    this.saveMovie();
  }
}
