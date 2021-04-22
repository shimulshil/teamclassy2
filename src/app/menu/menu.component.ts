import { RoomService } from './../services/room.service';
import { Room } from './../models/room.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  /*public rooms = [
    {name: 'Copenhagen', temp: 'Hot', air: 'Good', humidity: 'Dry'},
    {name: 'Roskilde', temp: 'Cold', air: 'Not Good', humidity: 'Moist'}
    ];*/

  rooms: Room[];

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.retrieveRooms();
    //console.log(this.rooms);
}

retrieveRooms(): void {
  this.roomService.getAll()
    .subscribe(
      data => {
        this.rooms = data;
        this.changeRoom(this.rooms[0]);
      },
      error => {
        console.log(error);
      });
}

assignValue(value, index){
  if (index === 'sTemperature'){
    switch (value){
      case -3: {
        value = 'Cold';
        break;
      }
      case -2: {
        value = 'Really Chilly';
        break;
      }
      case -1: {
        value = 'Chilly';
        break;
      }
      case 0: {
        value = 'Fair';
        break;
      }
      case 1: {
        value = 'Warm';
        break;
      }
      case 2: {
        value = 'Really Warm';
        break;
      }
      case 3: {
        value = 'Hot';
        break;
      }
      default: {
        console.log('error');
        value = ' ';
        break;
      }
    }

  }

  if (index === 'sAirQuality'){
    switch (value){
      case -3: {
        value = 'Really Bad';
        break;
      }
      case -2: {
        value = 'Bad';
        break;
      }
      case -1: {
        value = 'Not Good';
        break;
      }
      case 0: {
        value = 'Fair';
        break;
      }
      case 1: {
        value = 'Okay';
        break;
      }
      case 2: {
        value = 'Good';
        break;
      }
      case 3: {
        value = 'Excellent';
        break;
      }
      default: {
        console.log('error');
        value = ' ';
        break;
      }
    }

  }

  if (index === 'sHumidity'){
    switch (value){
      case -3: {
        value = 'Reallyyy Dryyy';
        break;
      }
      case -2: {
        value = 'Dryy';
        break;
      }
      case -1: {
        value = 'Draughty';
        break;
      }
      case 0: {
        value = 'Fair';
        break;
      }
      case 1: {
        value = 'Moisty';
        break;
      }
      case 2: {
        value = 'Moistyy';
        break;
      }
      case 3: {
        value = 'Super Dank/ Moistyyy';
        break;
      }
      default: {
        console.log('error');
        value = ' ';
        break;
      }
    }

  }

  return value;
  
}

  changeRoom(room){
    document.getElementsByClassName('roomName')[0].innerHTML = room.roomName;
    document.getElementsByClassName('statusText')[0].innerHTML = this.assignValue(room.sTemperature, 'sTemperature');
    document.getElementsByClassName('statusText')[1].innerHTML = this.assignValue(room.sAirQuality, 'sAirQuality');
    document.getElementsByClassName('statusText')[2].innerHTML = this.assignValue(room.sHumidity, 'sHumidity');
  }

}
