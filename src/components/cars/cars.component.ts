import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  // private counter = 0;

  public marks = [
    {
      id: 1,
      name: 'Volgswagen',
    },
    {
      id: 2,
      name: 'Audi',
    }
  ]

  constructor() {
    // this.testlog('constructor');
   }

  ngOnInit() {
    // this.testlog('init');
  }

  // private testlog(name: string) {
  //   let counter2 = 0;
  //   counter2 ++;
  //   this.counter++;
  //   console.log( this.counter, name, 'this coutrer');
  //   console.log( counter2, name, 'counter2');
  // } 

}
