import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( ) {}
  public tempValue;
  public value;
  public type="ion-range";

  tempChange(){
  console.log(this.tempValue);
  this.value=this.tempValue;
  if (this.tempValue<0){
    this.type="ion-range10"

  }
  if (this.tempValue<-1){
    this.type="ion-range0"

  }

  }

}

