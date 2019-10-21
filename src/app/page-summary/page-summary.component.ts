import { Component, OnInit } from '@angular/core';
import { StateManagementService } from '../state-management.service';
import * as R from 'ramda';
const { prop } = R;


@Component({
  selector: 'app-page-summary',
  templateUrl: './page-summary.component.html',
  styleUrls: []
})
export class PageSummaryComponent implements OnInit {
  count = 123;
  firstName;
  lastName;
  _count;

  constructor(private myService: StateManagementService) {
    //this.myService.init();
    console.log('=== in constructor ==');
    this.myService.appState$.subscribe(val => {
      console.log('============ good la: ', val);
      this._count = prop('count')(val);
      //this.count = 789;
      //console.log('in subscription: ', this.count);
      this.firstName = prop('first')(val);
      this.lastName = prop('last')(val);
    });
    this.myService.init();
  }

  ngOnInit() {
    this.count = this._count;
    //console.log('=== in init ==');
    //this.myService.init();
    //this.count = 456;
    //console.log('--inside summary outside sub: ', this.count);

    // this.myService.appState$.subscribe(val => {
    //   console.log('---in subscribe summary, state: ', val);
    //   //this.count = prop('count')(val);
    //   this.count = 789;
    //   console.log('in subscription: ', this.count);
    //   this.firstName = prop('first')(val);
    //   this.lastName = prop('last')(val);
    // });

    //console.log('when leave: ', this.count);
  }

  // add = () => this.myService.add();
  // minus = () => this.myService.minus();
  // submit = () => this.myService.first(this.firstName);
}
