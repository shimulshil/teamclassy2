import { Component, DoCheck, OnInit, ɵɵtrustConstantResourceUrl} from '@angular/core';
import {FeedbackService} from './../services/feedback.service'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit, DoCheck {

  public tempValue;
  public humValue;
  public airValue;
  public type = 'ion-range0';
  public roomName = document.getElementsByClassName('roomName')[0].innerHTML;
  public roomID = document.getElementById('roomID').innerHTML;

  constructor(private feedbackservice: FeedbackService) {
    this.tempValue = 0;
    this.humValue = 0;
    this.airValue = 0;
  }

  ngOnInit(){
  }

  ngDoCheck(){
    this.roomName = document.getElementsByClassName('roomName')[0].innerHTML;
    this.roomID = document.getElementById('roomID').innerHTML;

  }

  tempChange(){
    console.log(document.getElementsByClassName('roomName')[0].innerHTML);

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
  saveFeedback(): void {
    const data = {
      roomID : Number(this.roomID),
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
