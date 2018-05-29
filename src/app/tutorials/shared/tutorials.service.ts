import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTutorial, RemoveTutorial } from '../state/tutorial.actions';
import { Tutorial } from './tutorial.model';
import { PouchdbService } from '../../core/pouchdb/pouchdb.service';

@Injectable({
  providedIn: 'root'
})
export class TutorialsService {

  constructor(private store: Store,
    private pouchdbService: PouchdbService) { }

  addTutorial(name, url) {
    const newTutorial = new Tutorial({
      _id: this.pouchdbService.getRandomInt().toString(),
      name: name,
      url: url
    });
    this.store.dispatch(new AddTutorial(newTutorial));
  }

  removeTutorial(_id: string) {
    this.store.dispatch(new RemoveTutorial(_id));
  }
}
