import { Tab2Page } from './../tab2/tab2.page';
import { Component } from '@angular/core';



@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  tempValue;

  constructor() {}

  Tab2Page: Tab2Page;
  tempStatus;

  getValue(){
     this.tempValue = document.getElementsByClassName('aux-input')[1];
     //this.tempStatus = document.getElementsByClassName('statusText')[1].innerHTML;
     //console.log(this.tempStatus);

     switch (this.tempValue.value) {

       case '0':  { document.getElementsByClassName('statusText')[0].innerHTML = "Normal";
                  break;
        }

        case '3':  { document.getElementsByClassName('statusText')[0].innerHTML = "Hot";
                  break;
        }

        case '-3':  { document.getElementsByClassName('statusText')[0].innerHTML = "Cold";
                  break;
        }

       default: {
          console.log('default');
          break;
          }

     }
  }

}
