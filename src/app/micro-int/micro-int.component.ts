import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-micro-int',
  templateUrl: './micro-int.component.html',
  styleUrls: ['./micro-int.component.scss'],
})


export class MicroIntComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('micro-int');
  }

}
