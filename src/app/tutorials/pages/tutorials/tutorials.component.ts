import { Component, OnInit } from '@angular/core';
import { TutorialsService } from '../../shared/tutorials.service';
import { Subject, Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { Tutorial } from '../../shared/tutorial.model';
import { takeUntil } from 'rxjs/operators';
import { TutorialState } from '../../state/tutorial.state';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {

  @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial[]>;
  private ngUnsubscribe: Subject<Boolean> = new Subject();
  tutorials: Tutorial[];

  constructor() {
    this.tutorials$.pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe((response: Tutorial[]) => {
      console.log('TutorialsComponent: tutorials response: ', response);
      this.tutorials = response;
    });
  }

  ngOnInit() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
