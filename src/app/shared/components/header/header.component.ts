import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Login, Logout } from '../../../state/app.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }


  login() {
    this.store.dispatch(new Login('My Username', 'My Secret Password'));
  }

  logout() {
    this.store.dispatch(new Logout());
  }


}
