package com.springangular.practice.java.services;

import java.util.List;
import java.util.Optional;

import com.springangular.practice.java.models.Movie;

public interface MovieService {

    //TODO Generate Javadoc comments CTRL + SHIFT + J
    public Movie save(Movie movie);

    //TODO Generate Javadoc comments CTRL + SHIFT + J
    public Optional<Movie> get(Long id);

    //TODO Generate Javadoc comments CTRL + SHIFT + J
    public Movie update(Movie movie);

    //TODO Generate Javadoc comments CTRL + SHIFT + J
    public String delete(Long id);

    //TODO Generate Javadoc comments CTRL + SHIFT + J
    public List<Movie> getAll();
    
}
