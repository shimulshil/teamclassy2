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

  constructor() {
    this.tempValue = 0;
    this.pushPage = Tab1Page;
    this.params = { id: 42 };
  }

  ngOnInit(){
    

  }

  tempChange(){
    //this.tempValue = this.navParams.data;
    //console.log(this.tempValue);
  }

  sayHello(){
    return this.tempValue;
  }
}
