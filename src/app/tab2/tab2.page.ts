import { Tab1Page } from './../tab1/tab1.page';
import { Component, OnInit} from '@angular/core';

import { NavParams } from '@ionic/angular';







@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  public tempValue = 3;
  public type="ion-range";
  
  constructor() {
    this.tempValue = 0;
  }

  ngOnInit(){
    

  }

  tempChange(){

    switch(this.tempValue){
      case -3: {
        this.type="ion-range-3";
        break;
      }
      case -2: {
        this.type="ion-range-2";
        break;
      }
      case -1: {
        this.type="ion-range-1";
        break;
      }
      case 0: {
        this.type="ion-range0";
        break;
      }
      case 1: {
        this.type="ion-range1";
        break;
      }
      case 2: {
        this.type="ion-range2";
        break;
      }
      case 3: {
        this.type="ion-range3";
        break;
      }
      default: {
        console.log('error');
        this.type="ion-range0";
        break;
      }
    }
    /*if (this.tempValue<0){
    this.type="ion-range0"
    
     }
    if (this.tempValue<-1){
    this.type="ion-range-1"
    
     }*/
    
     }
  sayHello(){
    return this.tempValue;
  }
}
