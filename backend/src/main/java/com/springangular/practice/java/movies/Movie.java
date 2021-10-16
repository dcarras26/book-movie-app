package com.springangular.practice.java.movies;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import org.springframework.data.relational.core.mapping.Table;

/**
 * Entity class for {@link Movie}
 * @author dcarrasquillo
 *
 */
@Entity 
@Table(value = "movies")
public class Movie {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotNull
	private long movieId;
	
	@Column(name = "title")
	private String title;
	
	@Column(name = "duration")
	private String duration;
	
	@Column(name = "rating")
	private String rating;
	
	@Column(name = "director")
	private String director;

	public Movie() {};

	public Movie(long movieId, String title, String duration, String rating, String director) {
		super();
		this.movieId = movieId;
		this.title = title;
		this.duration = duration;
		this.rating = rating;
		this.director = director;
	}

	public long getMovieId() {
		return movieId;
	}

	public void setMovieId(long movieId) {
		this.movieId = movieId;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getDuration() {
		return duration;
	}
	
	public void setDuration(String duration) {
		this.duration = duration;
	}
	
	public String getRating() {
		return rating;
	}
	
	public void setRating(String rating) {
		this.rating = rating;
	}
	
	public String getDirector() {
		return director;
	}
	
	public void setDirector(String director) {
		this.director = director;
	}

	@Override
	public String toString() {
		return "Movie [movieId=" + movieId + ", title=" + title + ", duration=" + duration + ", rating=" + rating
				+ ", director=" + director + "]";
	}


}
