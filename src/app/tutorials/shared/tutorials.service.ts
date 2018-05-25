import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTutorial, RemoveTutorial } from '../state/tutorial.actions';

@Injectable({
  providedIn: 'root'
})
export class TutorialsService {

  constructor(private store: Store) { }

  addTutorial(name, url) {
    this.store.dispatch(new AddTutorial({ name: name, url: url }));
  }

  deleteTutorial(name) {
    this.store.dispatch(new RemoveTutorial(name));
  }
}
