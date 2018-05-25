import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store: Store) { }

  login(payload) {
    // Create simple observable that emits three values
    return of({ token: 'secret token' });
  }

  logout(payload) {
    // Create simple observable that emits three values
    return of(true);
  }

  getLogin() {
    return this.store.select(state => state.AppState.token);
  }
}
