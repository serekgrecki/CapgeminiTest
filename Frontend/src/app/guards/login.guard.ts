import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalDataService } from '../core/services/global.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private globalService: GlobalDataService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.globalService.userName != null) {
      return true;
    }
    this.router.navigate(['login']);
  }
}
