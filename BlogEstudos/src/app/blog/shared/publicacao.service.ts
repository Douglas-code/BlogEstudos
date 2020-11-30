import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicacaoService {
  baseUrl: string = "https://localhost:44384/api";
  
  constructor(private httpClient: HttpClient) { }

  postPublicacao(post){
    let url = `${this.baseUrl}/PostPublicacao`;

    return this.httpClient.post(url, post, {responseType: 'text'});
  }

  getPublicacoes(id) {
    let url = `${this.baseUrl}/GetPublicacoes?usuarioId=${id}`;
    return this.httpClient.get(url);
  }

  getMaterias() {
    let url = `${this.baseUrl}/GetMaterias`;
    return this.httpClient.get(url);
  }
}
