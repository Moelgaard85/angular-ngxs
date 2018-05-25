import { Component, OnInit, OnDestroy } from '@angular/core';
import { TutorialsService } from '../../shared/tutorials.service';
import { Subject, Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { Tutorial } from '../../shared/tutorial.model';
import { takeUntil } from 'rxjs/operators';
import { TutorialState } from '../../state/tutorial.state';
import { AppState } from '../../../state/app.state';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit, OnDestroy {

  // @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial[]>;
  tutorials$: Observable<Tutorial[]> = this.store.select(state => state.AppState.TutorialState.tutorials);

  private ngUnsubscribe: Subject<Boolean> = new Subject();
  tutorials: Tutorial[];

  constructor(private store: Store) {

    this.tutorials$.pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe(response => {
      console.log('TutorialsComponent: tutorials response: ', response);
      this.tutorials = response;
    });
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
