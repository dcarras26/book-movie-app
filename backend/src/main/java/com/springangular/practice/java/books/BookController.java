package com.springangular.practice.java.books;

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

import com.springangular.practice.java.exceptions.ResourceNotFoundException;

@RestController
@RequestMapping("/api/v1/")
public class BookController {
	
	@Autowired
	private BookRepository bookRepository;

	//get all books
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/books")
	public List<Book> getAllBooks() {
		return bookRepository.findAll();
	}
	
	//create books
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/books")
	public Book createBook(@RequestBody Book book) {
		return bookRepository.save(book);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/books/{id}")
	public ResponseEntity<Book> getBookById(@PathVariable Long id) {
		Book book = bookRepository
				.findById(id).orElseThrow(()-> new ResourceNotFoundException("The Book with this id: " + id + " does not exist!"));
		return ResponseEntity.ok(book);
	}
}
