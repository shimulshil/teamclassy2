import { Tab2Page } from './tab2/tab2.page';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabDataService {

   tab2 = new Tab2Page();

  private Tab2Page = new Subject<any>();

    publishSomeData(data: any) {
        this.Tab2Page.next(data);
    }

    getObservable(): Subject<any> {
      this.tab2.sayHello();
        return this.Tab2Page;
    }
}
