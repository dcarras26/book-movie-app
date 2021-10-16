package com.springangular.practice.java.books;

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

import com.springangular.practice.java.exceptions.ResourceNotFoundException;
import com.springangular.practice.java.books.Book;

/**
 * HTTP Request Handler for {@link Book}
 * @author dcarrasquillo
 *
 */
@RestController
@RequestMapping("/api/v1/")
public class BookController {
	
	@Autowired
	private BookRepository bookRepository;

	
	/**
	 * HTTP GET all {@link Book}
	 * @return all Books
	 */
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/books")
	public List<Book> getAllBooks() {
		return bookRepository.findAll();
	}
	
	
	/**
	 * HTTP POST new {@link Book}
	 * @param book
	 * @return Save new Book
	 */
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/books")
	public Book createBook(@RequestBody Book book) {
		return bookRepository.save(book);
	}
	
	
	/**
	 * HTTP GET {@ link Body} by id
	 * @param id
	 * @return Book by Id
	 */
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/books/{id}")
	public ResponseEntity<Book> getBookById(@PathVariable Long id) {
		Book book = bookRepository
				.findById(id).orElseThrow(()-> new ResourceNotFoundException("The Book with this id: " + id + " does not exist!"));
		return ResponseEntity.ok(book);
	}
	
	/**
	 * HTTP PUT {@link Book} by id
	 * @param id
	 * @param book
	 * @return updated Book
	 */
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/books/{id}")
	public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody Book bookDetails) {
		Book book = bookRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("The Book with this id: " + id + " does not exist!"));
		book.setTitle(bookDetails.getTitle());
		book.setAuthor(bookDetails.getAuthor());
		book.setIsbn(bookDetails.getIsbn());
		Book updateBook = bookRepository.save(book);
		return ResponseEntity.ok(updateBook);
	}
	
	
	/**
	 * HTTP DELETE {@link Book} by id
	 * @param id
	 * @return delete response
	 */
	@DeleteMapping("/books/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteBook(@PathVariable Long id) {
		Book book = bookRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("The Book with this id: " + id + " does not exist!"));
		bookRepository.delete(book);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
