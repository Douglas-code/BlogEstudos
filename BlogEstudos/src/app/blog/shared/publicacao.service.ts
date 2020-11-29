import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicacaoService {
  baseUrl: string = "https://localhost:44384/api";
  
  constructor(private httpClient: HttpClient) { }

  getPublicacoes(id) {
    let url = `${this.baseUrl}/GetPublicacoes?usuarioId=${id}`;
    return this.httpClient.get(url);
  }
}
