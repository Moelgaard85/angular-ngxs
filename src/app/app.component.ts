import { Component, OnInit } from '@angular/core';
import { Actions, ofActionDispatched } from '@ngxs/store';
import { Router } from '@angular/router';
import { Logout } from './state/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private actions: Actions, private router: Router) { }

  ngOnInit() {
    this.actions.pipe(ofActionDispatched(Logout)).subscribe(() => {
      // this.router.navigate(['/login']);
      console.log('AppComponent: Log out action caught!');
    })
  }
}
