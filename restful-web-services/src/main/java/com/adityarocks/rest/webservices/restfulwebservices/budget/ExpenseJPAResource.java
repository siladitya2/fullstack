package com.adityarocks.rest.webservices.restfulwebservices.budget;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin
@RestController
public class ExpenseJPAResource {

	@Autowired
	ExpenseJPARepository expenseJPARepository;

	@GetMapping("/jpa/users/{username}/expense")
	public List<Expense> getAllExpenses(@PathVariable String username) {
		return (List<Expense>) expenseJPARepository.findByUsername(username);
	}

	@GetMapping("/jpa/users/{username}/expense/{expenseMonth}")
	public List<Expense> getExpenseForExpenseMonth(@PathVariable String username, @PathVariable String expenseMonth) {

		return expenseJPARepository.find(expenseMonth, username);
	}

	@GetMapping("/jpa/users/{username}/expense/id/{id}")
	public Expense getExpenseForId(@PathVariable String username, @PathVariable long id) {

		return expenseJPARepository.findById(id).get(0);
	}

	@PostMapping("jpa/users/{username}/add/expense")
	public ResponseEntity<Void> addExpense(@PathVariable String username, @RequestBody Expense expense) {
		expense.setUsername(username);
		Expense tobeCreated = expenseJPARepository.save(expense);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(tobeCreated.getId())
				.toUri();
		return ResponseEntity.created(uri).build();
	}

	@DeleteMapping("jpa/users/{username}/expense/{id}")
	public ResponseEntity<Void> deleteExpense(@PathVariable String username, @PathVariable long id) {
		expenseJPARepository.deleteById(id);

		return ResponseEntity.noContent().build();
	}

	@PutMapping("jpa/users/{username}/expense/{id}")
	public ResponseEntity<Expense> updateExpense(@PathVariable String username, @PathVariable long id,
			@RequestBody Expense expense) {
		expense.setUsername(username);
		expense.setId(id);
		Expense expenseUpdated = expenseJPARepository.save(expense);
		return new ResponseEntity<Expense>(expenseUpdated, HttpStatus.OK);
	}

}
