package com.springangular.practice.java.movies;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springangular.practice.java.books.Book;
import com.springangular.practice.java.exceptions.ResourceNotFoundException;

/**
 * HTTP Request Handler for {@link Movie}
 * @author dcarrasquillo
 *
 */
@RestController
@RequestMapping("/api/v1/")
public class MovieController {
	
	@Autowired
	private MovieRepository movieRepository;
	
	/**
	 * HTTP GET all {@link Movie}
	 * @return all Movies
	 */
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/movies")
	public List<Movie> getAllMovies() {
		return movieRepository.findAll();
	}
	
	
	/**
	 * HTTP POST new {@link Movie}
	 * @param movie
	 * @return Save new Movie
	 */
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/movies")
	public Movie createMovie(@RequestBody Movie movie) {
		return movieRepository.save(movie);
	}
	
	
	/**
	 * HTTP GET {@ link Body} by id
	 * @param id
	 * @return Movie by Id
	 */
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/movies/{id}")
	public ResponseEntity<Movie> getMovieById(@PathVariable Long id) {
		Movie movie = movieRepository
				.findById(id).orElseThrow(()-> new ResourceNotFoundException("The Movie with this id: " + id + " does not exist!"));
		return ResponseEntity.ok(movie);
	}
	
	/**
	 * HTTP PUT {@link Movie} by id
	 * @param id
	 * @param movie
	 * @return updated Movie
	 */
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/movies/{id}")
	public ResponseEntity<Movie> updateMovie(@PathVariable Long id, @RequestBody Movie movieDetails) {
		Movie movie = movieRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("The Movie with this id: " + id + " does not exist!"));
		movie.setTitle(movieDetails.getTitle());
		movie.setDirector(movieDetails.getDirector());
		movie.setDuration(movieDetails.getDuration());
		movie.setRating(movieDetails.getRating());
		Movie updateMovie = movieRepository.save(movie);
		return ResponseEntity.ok(updateMovie);
	}
	
	/**
	 * HTTP DELETE {@link Movie} by id
	 * @param id
	 * @return delete response
	 */
	@DeleteMapping("/movies/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteMovie(@PathVariable Long id) {
		Movie movie = movieRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("The Movie with this id: " + id + " does not exist!"));
		movieRepository.delete(movie);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}

}
