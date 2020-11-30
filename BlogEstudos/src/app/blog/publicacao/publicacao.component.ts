import { PublicacaoService } from './../shared/publicacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.component.html',
  styleUrls: ['./publicacao.component.css']
})
export class PublicacaoComponent implements OnInit {

  id = window.localStorage.getItem('id'); 
  list: any;

  constructor(private router: Router,private publicacaoService: PublicacaoService) { }

  ngOnInit(): void {
    this.listPublicacao();
  }

  listPublicacao() {
    this.publicacaoService.getPublicacoes(this.id).subscribe((res) =>{
      this.list = res;
      console.log(this.list);
    }, (err) => console.log(err))
  }

  navigateToCriarPublicacao() {
    this.router.navigate(['create-post']);
  }
}
