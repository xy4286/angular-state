import { Component, OnInit } from '@angular/core';
import { StateManagementService } from '../state-management.service';
import * as R from 'ramda';
const { prop } = R;


@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: []
})
export class PageTwoComponent implements OnInit {
  count = 0;
  lastName = '';

  constructor(private myService: StateManagementService) {
  }

  ngOnInit() {
    this.myService.appState$.subscribe(val => {
      console.log('state: ', val);
      this.count = prop('count')(val);
    });
  }

  //add = () => this.myService.add();
  minus = () => this.myService.minus();
  submit = () => this.myService.last(this.lastName);
}
