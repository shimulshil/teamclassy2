import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 

  constructor(public popoverController: PopoverController) {
  }

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
