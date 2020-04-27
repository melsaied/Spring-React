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

import com.example.SpringReact.model.Expense;
import com.example.SpringReact.repository.ExpenseRepository;

@RestController
@RequestMapping("expense")
public class ExpenseController {
	@Autowired
	private ExpenseRepository repository;

//	http://localhost:8080/expense/expenses
	@GetMapping("/expenses")
	Collection<Expense> expenses() {
		return repository.findAll();
	}

//	http://localhost:8080/expense/expenses/1
	@GetMapping("/expenses/{id}")
	ResponseEntity<Expense> getExpensesById(@PathVariable Long id) {
		Optional<Expense> optional = repository.findById(id);
		return optional.map(response -> ResponseEntity.ok().body(response))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

//	http://localhost:8080/expense/expenses
//	{"description": "Added Business trip","location": "Added New York","expenseDate": "2020-04-27T07:22:49Z","user": {"id": 11},"category": {"id": 11}}
	@PostMapping("/expenses")
	ResponseEntity<@Valid Expense> addExpense(@Valid @RequestBody Expense expense) throws URISyntaxException {
		expense = repository.save(expense);
//		return ResponseEntity.created(new URI("/expense/expenses" + expense.getId())).body(expense);
		return ResponseEntity.created(new URI("/expense/expenses")).body(expense);
	}

//	http://localhost:8080/expense/expenses/11
//	{"id": 11,"description": "Added Business trip","location": "Added New York","expenseDate": "2020-04-27T07:22:49Z","user": {"id": 11},"category": {"id": 11}}
	@PutMapping("/expenses/{id}")
	ResponseEntity<@Valid Expense> editExpense(@Valid @RequestBody Expense expense) {
		expense = repository.save(expense);
		return ResponseEntity.accepted().body(expense);
	}

//	http://localhost:8080/expense/expenses/11
	@DeleteMapping("/expenses/{id}")
	ResponseEntity<Object> deleteExpense(@PathVariable Long id) {
		repository.deleteById(id);
		return ResponseEntity.accepted().build();
	}
}
