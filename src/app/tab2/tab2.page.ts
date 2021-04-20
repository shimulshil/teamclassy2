import { Component, OnInit} from '@angular/core';
import {FeedbackService} from './../services/feedback.service'
import { TutorialService } from './../services/tutorial.service';
import { Feedback } from '../models/feedback.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  public tempValue;
  public humValue;
  public airValue;
  public type = 'ion-range0';

  constructor(private tutorialService: TutorialService, private feedbackservice: FeedbackService) {
    this.tempValue = 0;
    this.humValue = 0;
    this.airValue = 0;
  }

  ngOnInit(){
  }

  tempChange(){
    console.log(this.tempValue,"-temp, ", this.humValue," - hum, ", this.airValue," - air")

    switch (this.tempValue){
      case -3: {
        this.type = 'ion-range-3';
        break;
      }
      case -2: {
        this.type = 'ion-range-2';
        break;
      }
      case -1: {
        this.type = 'ion-range-1';
        break;
      }
      case 0: {
        this.type = 'ion-range0';
        break;
      }
      case 1: {
        this.type = 'ion-range1';
        break;
      }
      case 2: {
        this.type = 'ion-range2';
        break;
      }
      case 3: {
        this.type = 'ion-range3';
        break;
      }
      default: {
        console.log('error');
        this.type = 'ion-range0';
        break;
      }
    }
     }

  addTutorial(data){
    this.tutorialService.create(data);

  }
  saveFeedback(): void {
    const data = {
      roomID : 2,
      fHumidity : this.humValue,
      fTemperature : this.tempValue,
      fAirQuality: this.airValue
      
    };

    this.feedbackservice.create(data)
      .subscribe(
        response => {
          console.log(response);
         // this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
}
