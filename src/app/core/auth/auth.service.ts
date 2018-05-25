import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(payload) {
    // Create simple observable that emits three values
    return of({ token: 'secret token' });
  }

  logout(payload) {
    // Create simple observable that emits three values
    return of(true);
  }
}
