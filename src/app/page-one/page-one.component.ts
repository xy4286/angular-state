import { Component, OnInit } from '@angular/core';
import { StateManagementService } from '../state-management.service';
import * as R from 'ramda';
const { prop } = R;


@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: []
})
export class PageOneComponent implements OnInit {
  //count = 0;
  firstName = '';

  constructor(public myService: StateManagementService) {
  }

  ngOnInit() {
    // this.myService.appState$.subscribe(val => {
    //   console.log('in counter sub, state: ', val);
    //   this.count = prop('count')(val);
    //   //console.log('after setting: ', this.count);
    // });
  }

  add = () => this.myService.add();
  minus = () => this.myService.minus();
  submit = () => this.myService.first(this.firstName);
}
