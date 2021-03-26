import { TabDataService } from './../tab-data.service';
import { Tab2Page } from './../tab2/tab2.page';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavParams } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../services/firebase.service';
import { PopoverController } from '@ionic/angular';
import { MenuComponent } from '../menu/menu.component';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  room;

  roomID;

  //private tab2: Tab2Page
  public RoomInt = {
    Name: String,
    tempStr: String,
    tempValue: Number,
    airQuStr: String,
    humValue: Number,
    humStr: String
  
  }

  public RoomIsak = {
    Name: String,
    tempStr: String,
    tempValue: Number,
    airQuStr: String,
    humValue: Number,
    humStr: String
  
  }
  public tempStatus: string;
  public currentRoom;
  public datValue: string;
  public roomName: string;
  constructor(public navParams: NavParams,
              private firebaseService: FirebaseService,
              public popoverController: PopoverController,
              activatedRoute: ActivatedRoute
              
              ) { 
    this.tempStatus = 'Hot';
    this.datValue = this.navParams.get('userParams');
    this.roomID = activatedRoute.snapshot.params["roomID"];
    console.log(this.roomID);
  }
roomId = 'D1'
  ngOnInit(){  
    this.firebaseService.read_room().subscribe(data =>{
      //console.log(data);
      
  this.room = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          tempStr: e.payload.doc.data()['tempStr'],
         // Age: e.payload.doc.data()['Age'],
         // Address: e.payload.doc.data()['Address'],
        };
      })
      //console.log(this.room);
      this.RoomInt = this.room[0];
      this.RoomIsak = this.room[1];

    });

    
  
  }

 /* seeTemp(){
    alert(this.datValue);
  }*/

  async presentMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: MenuComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  

}
