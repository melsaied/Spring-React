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

import com.example.SpringReact.model.User;
import com.example.SpringReact.repository.UserRepository;

/**
 * https://www.youtube.com/watch?v=avvrsnYFXIE
 */
@RestController
@RequestMapping("user")
public class UserController {
	@Autowired
	private UserRepository repository;

//	http://localhost:8080/user/users
	@GetMapping("/users")
	Collection<User> users() {
		return repository.findAll();
	}

//	http://localhost:8080/user/users/1
	@GetMapping("/users/{id}")
	ResponseEntity<User> getUsersById(@PathVariable Long id) {
		Optional<User> optional = repository.findById(id);
		return optional.map(response -> ResponseEntity.ok().body(response))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

//	http://localhost:8080/user/users
//	{"name": "admin1@email.com","email": "admin1"}
	@PostMapping("/users")
	ResponseEntity<@Valid User> addUser(@Valid @RequestBody User user) throws URISyntaxException {
		user = repository.save(user);
//		return ResponseEntity.created(new URI("/user/users" + user.getId())).body(user);
		return ResponseEntity.created(new URI("/user/users")).body(user);
	}

//	http://localhost:8080/user/users/11
//	{"id": 11,"name": "admin11@email.com", "email": "admin11"}
	@PutMapping("/users/{id}")
	ResponseEntity<@Valid User> editUser(@Valid @RequestBody User user) {
		user = repository.save(user);
		return ResponseEntity.accepted().body(user);
	}

//	http://localhost:8080/user/users/11
	@DeleteMapping("/users/{id}")
	ResponseEntity<Object> deleteUser(@PathVariable Long id) {
		repository.deleteById(id);
		return ResponseEntity.accepted().build();
	}
}
