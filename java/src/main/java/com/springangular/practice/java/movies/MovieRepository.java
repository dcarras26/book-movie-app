package com.springangular.practice.java.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springangular.practice.java.models.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

}
