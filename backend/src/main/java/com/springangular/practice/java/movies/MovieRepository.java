package com.springangular.practice.java.movies;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * CRUD Repository for {@link Movie}
 * @author dcarrasquillo
 *
 */
@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

}
