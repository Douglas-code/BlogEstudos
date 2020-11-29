import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    login: '',
    senha: ''
  };

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.accountService.login(this.login).subscribe( (res) => {
      window.localStorage.setItem('id', res.id);
      window.localStorage.setItem('nome', res.nome);

      //
      this.router.navigate(['']);
    },
      () => { this.accountService.showMessage("Login ou senha incorretos", true) }
    );
  }

  navigateToCreateAccount() {
    this.router.navigate(['create-account']);
  }
}
