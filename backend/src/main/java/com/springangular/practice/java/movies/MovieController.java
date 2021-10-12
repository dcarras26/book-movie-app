package com.springangular.practice.java.movies;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springangular.practice.java.books.Book;
import com.springangular.practice.java.exceptions.ResourceNotFoundException;

@RestController
@RequestMapping("/api/v1/")
public class MovieController {
	
	@Autowired
	private MovieRepository movieRepository;
	
	//get all movies
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/movies")
	public List<Movie> getAllMovies() {
		return movieRepository.findAll();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/movies")
	public Movie createMovie(@RequestBody Movie movie) {
		return movieRepository.save(movie);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/movies/{id}")
	public ResponseEntity<Movie> getMovieById(@PathVariable Long id) {
		Movie movie = movieRepository
				.findById(id).orElseThrow(()-> new ResourceNotFoundException("The Movie with this id: " + id + " does not exist!"));
		return ResponseEntity.ok(movie);
	}

}
