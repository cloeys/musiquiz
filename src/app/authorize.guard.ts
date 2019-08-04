import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from './services/spotify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {
  constructor(
    private service: SpotifyService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.service.isAuthorized.value) {
      return true;
    } else {
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${'9f9c193c6cb24df8bd01cb13aa8cd7b9'}&response_type=token&redirect_uri=http://localhost:4200/authorize`;
      return false;
    }
  }
}
