import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Movie} from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseURL = "http://localhost:8080/api/v1/movies";
  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${this.baseURL}`);
  }

  createMovie(movie: Movie): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, movie);
  }

  updateMovie(id:number, movie: Movie): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, movie);

  }

  deleteMovie(id:number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
