import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from 'src/app/service/basic-authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetService } from 'src/app/service/data/budget.service';
import { Expense } from '../budget/budget.component';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.css']
})
export class UpdateExpenseComponent implements OnInit {
  username: string;
  id: number;
  expense: Expense;
  types: any = ['Grocerry', 'Clothings', 'Medicine','Non Veg','Vegetables','Food Outside', 'Others'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  constructor(private basicAuthenticationService: BasicAuthenticationService, private budgetService: BudgetService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.username = this.basicAuthenticationService.getAuthenticatedUser();
    this.id = this.route.snapshot.params['id'];
    this.expense=new Expense(-1,'','','',new Date(),'',0.0);
    this.budgetService.getExpense(this.username, this.id).subscribe(
      data => this.expense = data
    );
  }

  updateExpense(expense) {
    var eDate: Date = new Date(this.expense.expenseDate);
    this.expense.expenseMonth = this.convertMonthYear(eDate);
    this.budgetService.updateExpense(this.id, this.username, this.expense).subscribe(data => {
      this.router.navigate(['budget']);
    })
  }

  changeType(event) {
    this.expense.type = event.target.value;
  }
  convertMonthYear(eDate: Date): string {
    return this.months[eDate.getMonth()] + ',' + eDate.getFullYear();
  }
}
