package com.adityarocks.rest.webservices.restfulwebservices.todos;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {

	private static List<Todo> todos = new ArrayList<>();
	private static long idCounter = 0;

	static {
		todos.add(new Todo(++idCounter, "adityaRocks", "Learn full stack", new Date(), false));
		todos.add(new Todo(++idCounter, "adityaRocks", "Learn full stack", new Date(), false));
		todos.add(new Todo(++idCounter, "adityaRocks", "Learn full stack", new Date(), false));
	}

	public List<Todo> fildAll() {
		return todos;
	}

	public Todo save(Todo todo) {
		if (todo.getId() == -1 || todo.getId()==0) {
			todo.setId(++idCounter);
			todos.add(todo);
		} else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}

	public Todo deleteById(long id) {
		// TODO Auto-generated method stub
		Todo todo = findById(id);
		if (todo == null) {
			return null;
		}
		if (todos.remove(todo)) {
			return todo;
		}
		return null;
	}

	public Todo findById(long id) {
		// TODO Auto-generated method stub
		for (Todo todo : todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}

}
