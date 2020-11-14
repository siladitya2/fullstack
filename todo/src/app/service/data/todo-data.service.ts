import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username) {
    return this.http.get<Todo[]>(`http://localhost:8080/jpa/users/${username}/todos`);
  }
  retrieveTodo(username, id) {
    return this.http.get<Todo>(`http://localhost:8080/jpa/users/${username}/todos/${id}`);
  }
  deleteTodo(id, username) {
    return this.http.delete(`http://localhost:8080/jpa/users/${username}/todos/${id}`);
  }

  updateTodo(id, username, todo) {
    return this.http.put(`http://localhost:8080/jpa/users/${username}/todos/${id}`, todo);
  }

  addTodo(username, todo) {
    return this.http.post(`http://localhost:8080/jpa/users/${username}/todos`, todo);
  }
}
