import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Login, Logout } from '../../../state/app.actions';
import { AuthService } from '../../../core/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn;

  constructor(private authService: AuthService,
    private store: Store) {
    authService.getLogin()
      .subscribe(response => {
        this.loggedIn = response;
        console.log('HeaderComponent: this.loggedIn: ', this.loggedIn);
      });
  }

  ngOnInit() {
  }


  login(username, password) {
    this.store.dispatch(new Login(username, password));
  }

  logout() {
    this.store.dispatch(new Logout());
  }


}
