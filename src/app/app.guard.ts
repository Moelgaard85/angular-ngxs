import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from './state/app.state';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {
  constructor(private store: Store,
    private router: Router) { }

  canActivate() {
    const token = this.store.selectSnapshot(state => state.AppState.token);
    console.log('AppGuard: token: ', token);
    // return token !== null;

    if (token) {
      return true;
    } else {
      this.router.navigate(['/tutorials']);
    }

    return false;
  }
}
