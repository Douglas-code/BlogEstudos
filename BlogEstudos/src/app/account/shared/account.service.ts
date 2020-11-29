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

  login(user: any) {
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'meu-token');
      resolve(true);
    });
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
      map(obj => obj),
      catchError(e=>this.errorHandler(e))
    );
  }

  errorHandler(e: any): any{
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
