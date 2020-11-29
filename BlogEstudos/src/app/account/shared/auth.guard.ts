import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    const idUsuario = window.localStorage.getItem('id');
    const nomeUsuario = window.localStorage.getItem('nome');

    if (idUsuario && nomeUsuario)
      return true;
    else
    {
      this.router.navigate(['login']);
      return false;
    }
  }
}
