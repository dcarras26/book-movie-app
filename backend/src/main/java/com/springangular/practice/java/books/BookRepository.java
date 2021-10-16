package com.springangular.practice.java.books;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * CRUD Repository for {@link Book}
 * @author dcarrasquillo
 *
 */
@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
 
}
