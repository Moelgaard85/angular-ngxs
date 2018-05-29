import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Tutorial } from '../../shared/tutorial.model';
import { TutorialsService } from '../../shared/tutorials.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit, OnChanges {

  @Input() tutorials: Tutorial[];

  constructor(private tutorialService: TutorialsService) {
  }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ReadComponent: ngOnChanges: changes: ', changes);
    // this.doSomething(changes.tutorials.currentValue);
    // You can also use tutorials.previousValue and
    // tutorials.firstChange for comparing old and new values

  }

  removeTutorial(_id: string) {
    this.tutorialService.removeTutorial(_id);
  }

}
