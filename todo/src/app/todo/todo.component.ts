import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
id:number;
todo:Todo;
username:string;
  constructor(private basicAuthenticationService:BasicAuthenticationService,private todoDataService:TodoDataService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.username = this.basicAuthenticationService.getAuthenticatedUser();
    this.id=this.route.snapshot.params['id'];
    this.todo=new Todo(this.id,'',false,new Date());
    if(this.id!=-1){
    this.todoDataService.retrieveTodo(this.username,this.id).subscribe(
      data=> this.todo= data
    );
    }
  }

  saveTodo(){
    if(this.id===-1){
      this.todoDataService.addTodo(this.username,this.todo).subscribe(data=>{
        console.log(data);
        this.router.navigate(['todos']);
      })

    }
    else{
    this.todoDataService.updateTodo(this.id,this.username,this.todo).subscribe(data=>{
      console.log(data);
      this.router.navigate(['todos']);
    })
  }
}

}
