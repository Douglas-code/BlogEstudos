import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { EMPTY, from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl: string = "https://localhost:44384/api";
  
  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }

  login(user: any): Observable<any> {
    const url = `${this.baseUrl}/Login`;
    return this.httpClient.post(url, user).pipe(
      map(res => res),
      catchError(e => this.errorHandler(e))
    )
  }

  showMessage(msg: string, isError: boolean = false): void
  {
    this.snackBar.open(msg, 'X',
      {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ?  ['msg-error'] : ['msg-success'] 
      });
  }

  createAccount(account: any) {
    const url = `${this.baseUrl}/CriarConta`;

    return this.httpClient.post(url, account, { responseType: 'text' }).pipe(
      map(obj => obj)
    );
  }

  errorHandler(e: any): any{
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
