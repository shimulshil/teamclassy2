import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  room;

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

  constructor(private _firebaseService: FirebaseService) { }
  roomId = 'D1'
  ngOnInit() {

    this._firebaseService.read_room().subscribe(data =>{
      console.log(data);
      
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
      //console.log(this.room[1].Name);
      this.RoomInt = this.room[0];
      this.RoomIsak = this.room[1];

    });

  }

  

}
