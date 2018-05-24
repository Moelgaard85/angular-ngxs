import { Component, OnInit } from '@angular/core';
import { TutorialsService } from '../../shared/tutorials.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private tutorialService: TutorialsService) { }

  ngOnInit() { }

  addTutorial(name, url) {
    this.tutorialService.addTutorial(name, url);
  }

}
