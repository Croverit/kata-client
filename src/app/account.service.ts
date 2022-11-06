import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Statement} from './statement.model';
import {Account} from './account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {
  }


  printStatements(accountId: any): Observable<Statement[]> {
    let httpHeaders = new HttpHeaders().set('Authorization', 'Basic dXNlcjoxMjM=');
    return this.http.get<Statement[]>(`http://localhost:8080/bank-management/account/${accountId}/statements`, {headers: httpHeaders})
  }

  doOperation(accountId: any, operation: any, amount: any): Observable<Account> {
    let httpHeaders = new HttpHeaders().set('Authorization', 'Basic dXNlcjoxMjM=');
    return this.http.put<Account>(`http://localhost:8080/bank-management/account/${accountId}`, {},
      {params: {amount: amount, operation: operation}, headers: httpHeaders});
  }
}
