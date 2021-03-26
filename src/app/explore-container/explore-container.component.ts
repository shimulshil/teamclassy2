import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(private menu: MenuController) { }

  ngOnInit() {}

  openFirst() {
    console.log('virker');
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

}
