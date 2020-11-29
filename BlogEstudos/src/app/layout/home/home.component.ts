import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id = window.localStorage.getItem('id');
  nome = window.localStorage.getItem('nome');

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.nome, this.id)
  }

  Logout()
  {
    localStorage.clear();

    this.router.navigate(['/login']);
  }

}
