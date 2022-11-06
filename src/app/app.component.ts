import {Component} from '@angular/core';
import {AccountService} from './account.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Statement} from './statement.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kata-client';

  doOperationForm = new FormGroup({
    amount: new FormControl(''),
    account: new FormControl(''),
    operation: new FormControl(''),
  });

  printStatementsForm = new FormGroup({
    statementsAccount: new FormControl(''),
  });

  newBalance: any;
  statements: Statement[] = [];

  constructor(private accountService: AccountService) {
  }

  onDoOperation() {
    this.accountService.doOperation(this.doOperationForm.get('account')?.value, this.doOperationForm.get('operation')?.value, this.doOperationForm.get('amount')?.value)
      .subscribe(value => {
        this.newBalance = value.balance;
      })
  }

  onPrintStatements() {
    this.accountService.printStatements(this.printStatementsForm.get('statementsAccount')?.value)
      .subscribe(value => {
        this.statements = value;
      })
  }
}
