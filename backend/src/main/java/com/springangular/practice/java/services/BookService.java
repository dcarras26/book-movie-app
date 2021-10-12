package com.springangular.practice.java.services;
import java.util.List;
import java.util.Optional;

import com.springangular.practice.java.books.Book;

public interface BookService {

    //TODO Generate Javadoc comments CTRL + SHIFT + J
    public Book save(Book book);

    //TODO Generate Javadoc comments CTRL + SHIFT + J
    public Optional<Book> get(Long id);

    //TODO Generate Javadoc comments CTRL + SHIFT + J
    public Book update(Book book);

    //TODO Generate Javadoc comments CTRL + SHIFT + J
    public String delete(Long id);

    //TODO Generate Javadoc comments CTRL + SHIFT + J
    public List<Book> getAll();
    
}
