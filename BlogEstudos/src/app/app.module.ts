import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { PublicacaoComponent } from './blog/publicacao/publicacao.component';
import { CriarPublicacaoComponent } from './blog/criar-publicacao/criar-publicacao.component';
import { AdicionarArquivosComponent } from './blog/adicionar-arquivos/adicionar-arquivos.component';
import { MinhasPublicacoesComponent } from './blog/minhas-publicacoes/minhas-publicacoes.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    AuthenticationComponent,
    PublicacaoComponent,
    CriarPublicacaoComponent,
    AdicionarArquivosComponent,
    MinhasPublicacoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
