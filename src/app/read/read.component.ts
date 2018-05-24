import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { Store, Select } from '@ngxs/store';
import { RemoveTutorial } from '../actions/tutorial.actions';
import { TutorialState } from '../state/tutorial.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial[]>;
  tutorials: Tutorial[] = [];
  // tutorials$: Observable<Tutorial>;

  constructor(private store: Store) {
    // this.tutorials$ = this.store.select(state => state.tutorials.tutorials);
    this.tutorials$.subscribe((response: Tutorial[]) => {
      this.tutorials = response;
    });
  }

  delTutorial(name) {
    this.store.dispatch(new RemoveTutorial(name));
  }

  ngOnInit() {
  }

}
