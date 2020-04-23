package com.example.SpringReact.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringReact.model.Category;
import com.example.SpringReact.repository.CategoryRepository;

@RestController
@RequestMapping("category")
public class CategoryController {
	@Autowired
	private CategoryRepository repository;

//	http://localhost:8080/category/categorys
	@GetMapping("/categorys")
	Collection<Category> categorys() {
		return repository.findAll();
	}

//	http://localhost:8080/category/categorys/1
	@GetMapping("/categorys/{id}")
	ResponseEntity<Category> getCategorysById(@PathVariable Long id) {
		Optional<Category> optional = repository.findById(id);
		return optional.map(response -> ResponseEntity.ok().body(response))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

//	http://localhost:8080/category/categorys
//	{"name": "admin1@email.com","email": "admin1"}
	@PostMapping("/categorys")
	ResponseEntity<@Valid Category> addCategory(@Valid @RequestBody Category category) throws URISyntaxException {
		category = repository.save(category);
//		return ResponseEntity.created(new URI("/category/categorys" + category.getId())).body(category);
		return ResponseEntity.created(new URI("/category/categorys")).body(category);
	}

//	http://localhost:8080/category/categorys/11
//	{"id": 11,"name": "admin11@email.com", "email": "admin11"}
	@PutMapping("/categorys/{id}")
	ResponseEntity<@Valid Category> editCategory(@Valid @RequestBody Category category) {
		category = repository.save(category);
		return ResponseEntity.accepted().body(category);
	}

//	http://localhost:8080/category/categorys/11
	@DeleteMapping("/categorys/{id}")
	ResponseEntity<Object> deleteCategory(@PathVariable Long id) {
		repository.deleteById(id);
		return ResponseEntity.accepted().build();
	}
}
