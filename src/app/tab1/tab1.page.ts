import { TutorialService } from './../services/tutorial.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public tempStatus: string;
  public testValue;


  constructor() {
    this.tempStatus = 'Normal';
  }

  ngOnInit() {
  }

}
