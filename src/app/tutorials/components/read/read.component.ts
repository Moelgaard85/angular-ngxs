import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Tutorial } from '../../shared/tutorial.model';
import { TutorialsService } from '../../shared/tutorials.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  @Input() tutorials: Tutorial[];

  constructor(private tutorialService: TutorialsService) {
  }

  ngOnInit() { }

  deleteTutorial(name) {
    this.tutorialService.deleteTutorial(name);
  }

}
