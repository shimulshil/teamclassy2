import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  public tempValue;
  public type = 'ion-range0';
  constructor() {
    this.tempValue = 0;
  }

  ngOnInit(){
  }

  tempChange(){

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
}
