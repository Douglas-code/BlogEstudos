import { AdicionarArquivosComponent } from './blog/adicionar-arquivos/adicionar-arquivos.component';
import { CriarPublicacaoComponent } from './blog/criar-publicacao/criar-publicacao.component';
import { PublicacaoComponent } from './blog/publicacao/publicacao.component';
import { AuthGuard } from './account/shared/auth.guard';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: 'posts', component: PublicacaoComponent },
      { path: 'create-post', component: CriarPublicacaoComponent },
      { path: 'add-files', component: AdicionarArquivosComponent}
    ],
    canActivate: [AuthGuard]
  }, 
  { 
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'create-account:id', component: CreateAccountComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
