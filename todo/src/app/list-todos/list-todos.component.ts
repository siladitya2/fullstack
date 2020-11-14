import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Route, Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

export class Todo {
  constructor(public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date) {

  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1, 'Learn to dance', true, new Date()),
    new Todo(2, 'Become angular expert', false, new Date())
  ];
  username:string;

  constructor(private todoDataService:TodoDataService, private router:Router,
    private basicAuthenticationService:BasicAuthenticationService) { }

  isdelete:boolean=false;
  message: string="Delete successfully"
  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.username = this.basicAuthenticationService.getAuthenticatedUser();
    this.todoDataService.retrieveAllTodos(this.username).subscribe(response =>{
      this.todos=response;
    }
    );
  }

  deleteTodo(id){
    this.todoDataService.deleteTodo(id,this.username).subscribe(response=>{
      this.isdelete=true;
      this.refreshTodos();
    });
  }

  updateTodo(id){
    console.log(`update ${id}`);
    this.router.navigate(['todo',id]);
  }
  
  addTodo(){
    this.router.navigate(['todo',-1]);
  }
}
