import { PublicacaoService } from './../shared/publicacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minhas-publicacoes',
  templateUrl: './minhas-publicacoes.component.html',
  styleUrls: ['./minhas-publicacoes.component.css']
})
export class MinhasPublicacoesComponent implements OnInit {

  id = window.localStorage.getItem('id');
  list: any;
  constructor(private publicacaoService : PublicacaoService, private router: Router) { }

  ngOnInit(): void {
    this.listarMinhasPublicacoes();
  }

  listarMinhasPublicacoes() {
    this.publicacaoService.getMinhasPublicacoes(this.id).subscribe((res) =>{this.list = res}, err => console.log(err))
  }

  addArquivos(id) {
    this.router.navigate([`/add-files/${id}`]);
  }
}
