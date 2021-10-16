import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  editMovie: Movie = new Movie();
  id: number;

  constructor(private route:Router, private movieService: MovieService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.movieService.updateMovie(this.id, this.editMovie).subscribe(data => {
      this.goToMovieList();
    }, error => console.log(error));
  }

  goToMovieList() {
    this.route.navigate(['/movies']);
  }
}
