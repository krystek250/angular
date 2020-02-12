import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CarsService } from './providers/cars.service';

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

  constructor(
    private carsService: CarsService // w ten sposób odnosimy się do naszego (injection) carsService;
  ) {
    // this.testlog('constructor');
   }

  ngOnInit() {
    // this.testlog('init');
  }

  public emitCarsService(mark: any): void {
    this.carsService.carsNameEmitter.next(mark); // funkcja next aktywuje emitter np: weź emituj ten obiekt, zmienna, daną, itd..;
  }

  // private testlog(name: string) {
  //   let counter2 = 0;
  //   counter2 ++;
  //   this.counter++;
  //   console.log( this.counter, name, 'this coutrer');
  //   console.log( counter2, name, 'counter2');
  // } 

}
