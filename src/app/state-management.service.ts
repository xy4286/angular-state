import { Injectable } from '@angular/core';
import * as R from 'ramda';
import { Observable, Subject,  merge, pipe} from 'rxjs';
import { map, scan } from 'rxjs/operators';

const { inc, dec, lensPath, lensProp, over, prop, assoc, set } = R;

@Injectable({
  providedIn: 'root'
})
export class StateManagementService {

  // streams
  _init$ = new Subject;
  _add$ = new Subject;
  _minus$ = new Subject;
  _first$ = new Subject;
  _last$ = new Subject;

  // mappings
  _initCmd = () => state => {
    return state;
  };

  _addCmd = () => state => {
    return over(lensProp('count'), inc)(state);
  };

  _minusCmd = () => state => {
    return over(lensProp('count'), dec)(state)
  };

  _firstCmd = first => state => {
    return set(lensProp('first'), first)(state)
  };

  _lastCmd = last => state => {
    return set(lensProp('last'), last)(state)
  };

  // handlerrs
  init = () => this._init$.next();
  add = () => this._add$.next();
  minus = () => this._minus$.next();
  first = val => this._first$.next(val);
  last = val => this._last$.next(val);

  init$ = this._init$.pipe(map(this._initCmd));
  add$ = this._add$.pipe(map(this._addCmd));
  minus$ = this._minus$.pipe(map(this._minusCmd));
  first$ = this._first$.pipe(map(this._firstCmd));
  last$ = this._last$.pipe(map(this._lastCmd));



  // appState$ = merge(
  //   this.init$,
  //   this.add$,
  //   this.minus$,
  //   this.first$,
  //   this.last$
  // ).pipe(
  //   // @ts-ignore
  //   scan((acc, c) => c(acc), {count: 0})
  // );
  //
  // appState$.subscribe(val => this.appState = val)



  //appState$;


  // constructor() {
  //   this.appState$ = merge(
  //     this.init$,
  //     this.add$,
  //     this.minus$,
  //     this.first$,
  //     this.last$
  //   ).pipe(
  //     // @ts-ignore
  //     scan((acc, c) => c(acc), {count: 0})
  //   );
  //
  // }

  public appState;

  //constructor() {
    // this.appState$ = merge(
    //   this.init$,
    //   this.add$,
    //   this.minus$,
    //   this.first$,
    //   this.last$
    // ).pipe(
    //   // @ts-ignore
    //   scan((acc, c) => {
    //     console.log('acc: ', acc);
    //     // @ts-ignore
    //     return c(acc);
    //   }, {count: 0})
    // );

  //}

  constructor() {
    merge(
      this.init$,
      this.add$,
      this.minus$,
      this.first$,
      this.last$
    ).pipe(
      // @ts-ignore
      scan((acc, c) => c(acc), {count: 0})
    ).subscribe(val => {
      this.appState = val;
      console.log('this.appState: ', this.appState);
    });
  }


  public sendData(data) {
    console.log('reach rxjs: ', data);
  }

}
