import { Component, OnInit } from '@angular/core';
import { Actions, ofActionDispatched, Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { Logout } from './state/app.actions';
import { PouchdbService } from './core/pouchdb/pouchdb.service';
import { InitTutorialState } from './tutorials/state/tutorial.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private actions: Actions,
    private router: Router,
    private pouchDBService: PouchdbService) {
  }

  ngOnInit() {
    this.actions.pipe(ofActionDispatched(Logout)).subscribe(() => {
      // this.router.navigate(['/login']);
      console.log('AppComponent: Log out action caught!');
    });
  }

}
