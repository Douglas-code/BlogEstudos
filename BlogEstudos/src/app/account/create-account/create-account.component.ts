import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  
  usuario = {
    nome: "",
    login: "",
    senha: ""
  };

  constructor(private router: Router, private accountService: AccountService) { }

  ngOnInit(): void {
  }

  createAccount() {
    this.accountService.createAccount(this.usuario).subscribe((ee) => {
      this.accountService.showMessage("Conta cadastrada com sucesso", false);
      this.router.navigate(['/login']);
      console.log(ee)
    },
      (res) => console.log(res),
    );
  }
}
