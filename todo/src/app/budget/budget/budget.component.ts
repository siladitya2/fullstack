import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../service/data/budget.service';
import { BasicAuthenticationService } from 'src/app/service/basic-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  now: Date = new Date();
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  month: string = this.convertMonthYear(new Date());
  year: string;
  username: string;
  expenses = [];
  expense = new Expense(-1, '', '', '', new Date(), this.month, 0);
  totalBudget: number = 35000;
  types: any = ['Grocerry', 'Clothings', 'Medicine','Non Veg','Vegetables','Food Outside', 'Others'];
  type: string;
  constructor(private budgetService: BudgetService, private router: Router,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
    this.refreshExpenses();
  }
  public getMonth(): string {
    const date = new Date();
    this.month = date.getMonth.name;
    return this.month;
  }

  public displayMonth(): string {
    return this.month;
  }
  public getAvailableBudget() {
    return this.totalBudget - this.getTotalExpense();
  }

  public getTotalExpense() {
    var sum = 0;
    this.expenses.forEach(function (value, index, arry) {
      sum += value.amount;
    }
    )
    return sum;
  }
  refreshExpenses() {
    this.username = this.basicAuthenticationService.getAuthenticatedUser();
    this.budgetService.retrieveAllExpenses(this.month).subscribe(response => {
      this.expenses = response;
    }
    );
  }

  saveExpense() {
    var eDate: Date = new Date(this.expense.expenseDate);
    this.expense.expenseMonth = this.convertMonthYear(eDate);
    this.budgetService.addExpense(this.username, this.expense).subscribe(data => {
      this.refreshExpenses();
    });
  }

  deleteExpense(expense) {
    this.budgetService.deleteExpense(this.username, expense).subscribe(data => {
      this.refreshExpenses();
    });
  }

  convertMonthYear(eDate: Date): string {
    return this.months[eDate.getMonth()] + ',' + eDate.getFullYear();
  }

  changeType(event) {
    console.log(this.type);
    this.expense.type = event.target.value;
  }

  updateExpense(expense) {
    this.router.navigate(['expense', expense.id]);
  }
}


export class Expense {
  constructor(
    public id: number,
    public username: string,
    public type: string,
    public description: string,
    public expenseDate: Date,
    public expenseMonth: string,
    public amount: number,
  ) {

  }
}
