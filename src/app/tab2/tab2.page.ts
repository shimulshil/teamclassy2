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

  params: object;
  pushPage: any;

  number: number;
  color: string;

  constructor() {
    this.tempValue = 0;
    this.pushPage = Tab1Page;
    this.params = { id: 42 };
  }

  onRangeChangeHandler() {

    if (this.number >2 && this.number <=3) {
        this.color = 'danger';
    }
    else if (this.number >1 && this.number <=2) {
      this.color = 'warning';
    }
    else if (this.number >-1 && this.number <=1) {
      this.color = 'success';
    }
    else if (this.number >-2 && this.number <=-1) {
      this.color = 'secondary';
    }
    else if (this.number >=-3 && this.number <=-2) {
      this.color = 'primary';
    }
    else {
      this.color = 'light';
    }
  }
  
  ngOnInit(){
    

  }

  tempChange(){
    
  }

  sayHello(){
    return this.tempValue;
  }
}
