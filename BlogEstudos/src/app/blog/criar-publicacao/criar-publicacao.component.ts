import { AccountService } from './../../account/shared/account.service';
import { PublicacaoService } from './../shared/publicacao.service';
import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-publicacao',
  templateUrl: './criar-publicacao.component.html',
  styleUrls: ['./criar-publicacao.component.css']
})
export class CriarPublicacaoComponent implements OnInit {

  id = window.localStorage.getItem('id');

  post = {
    titulo: "",
    conteudo: "",
    usuarioId: this.id,
    materiaId: '',
  }

  listMaterias: any;

  constructor(private router: Router, private publicacaoService: PublicacaoService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.listarMaterias();
  }

  listarMaterias() {
    this.publicacaoService.getMaterias().subscribe((res) => { this.listMaterias = res; console.log(this.listMaterias) }, (err) => console.log(err))
  }

  Postar(){
    this.publicacaoService.postPublicacao(this.post).subscribe((res) => {
      this.accountService.showMessage("Postado com sucesso", false);
      this.router.navigate(['/posts']);
    }, err => {
      //this.accountService.showMessage("Falha ao postar", true);
        console.log(err)
    })
  }
}
