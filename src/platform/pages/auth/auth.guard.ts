import { Injectable } from '@angular/core';
import { CanMatch, Router, UrlTree } from '@angular/router';
import { Observable, filter, map } from 'rxjs';
import { PlatformPages } from '../../enums';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
   providedIn: 'root'
})
export class AuthGuard implements CanMatch {
   constructor(private authService: AuthService, private router: Router) {
   }

   canMatch(): Observable<boolean | UrlTree> {
      return this.authService.serviceInit$.pipe(
         filter(value => value),
         map(() => !!this.authService.user || this.router.parseUrl(`/${PlatformPages.Login}`))
      );
   }
}
