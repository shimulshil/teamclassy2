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
}

retrieveRooms(): void {
  this.roomService.getAll()
    .subscribe(
      data => {
        this.rooms = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

  changeRoom(room){
    document.getElementsByClassName('roomName')[0].innerHTML = room.name;
    document.getElementsByClassName('statusText')[0].innerHTML = room.temp;
    document.getElementsByClassName('statusText')[1].innerHTML = room.air;
    document.getElementsByClassName('statusText')[2].innerHTML = room.humidity;
  }

}
