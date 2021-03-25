import { TabDataService } from '../tab-data.service';
import { Tab2Page } from '../tab2/tab2.page';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  private tab2: Tab2Page

  public tempStatus: string;

  public datValue: string;

  constructor(public navParams: NavParams) {
    this.tempStatus = 'Hot';
    this.datValue = this.navParams.get('userParams');
  }

  ngOnInit(){  
  }

  seeTemp(){
    alert(this.datValue);
  }

}
