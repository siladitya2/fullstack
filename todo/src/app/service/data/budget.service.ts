import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from 'src/app/budget/budget/budget.component';
import { HttpClient } from '@angular/common/http'

export const CLOUD_URL:string = 'https://adityarocks-app-interested-kookaburra.cfapps.io';
export const LOCAL_URL:string="http://localhost:8080";
export const CURL:string = CLOUD_URL;
@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient) { }

  retrieveAllExpenses(expenseMonth): Observable<Expense[]>{
    return this.http.get<Expense[]>(CURL+`/jpa/users/mamai/expense/${expenseMonth}`);
  }

  addExpense(username, expense) {
    return this.http.post(CURL+`/jpa/users/${username}/add/expense`, expense);
  }

  deleteExpense(username, expense) {
    return this.http.delete(CURL+`/jpa/users/${username}/expense/${expense.id}`);
  }

  updateExpense(id:any, username:any, expense:Object) {
    return this.http.put(CURL+`/jpa/users/${username}/expense/${id}`, expense);
  }

  getExpense(username:any,id:any):Observable<Expense>{
    return this.http.get<Expense>(`/jpa/users/${username}/expense/id/${id}`);
  }
}
