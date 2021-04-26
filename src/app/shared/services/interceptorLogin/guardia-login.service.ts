import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SessionStorageService } from '../sessionStorage/session-storage.service';




@Injectable()
export class GuardiaLoginService implements CanActivate {

  constructor(
    private storage: SessionStorageService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const token = this.storage.getToken();
    if (Boolean(token)) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
