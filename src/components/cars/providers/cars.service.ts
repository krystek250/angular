import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  public marks = [
    {
      id: 1,
      name: 'Volgswagen',
      models: [
        {
          name: 'Golf',
          color: 'Czerwony',
          hp: '130KM',
          img: 'assets/img/marks/golf.jpg'
        },
        {
          name: 'Bora',
          color: 'Niebieski',
          hp: '115KM',
          img: 'assets/img/marks/bora.jpg'
        },
        {
          name: 'Passat',
          color: 'Czarny',
          hp: '90KM',
          img: 'assets/img/marks/passat.jpg'
        },
      ]
    },
    {
      id: 2,
      name: 'Audi',
      models: [
        {
          name: 'A3',
          color: 'Czerwony',
          hp: '130KM',
          img: 'assets/img/marks/audi/passat.jpg'
        },
        {
          name: 'A4',
          color: 'Niebieski',
          hp: '115KM',
          img: 'assets/img/marks/audi/passat.jpg'
        },
        {
          name: 'A6',
          color: 'Czarny',
          hp: '90KM',
          img: 'assets/img/marks/audi/passat.jpg'
        },
      ]
    }
  ]

  public carsNameEmitter = new EventEmitter<any>();

  constructor() {}
}
