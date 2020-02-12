import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../providers/cars.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss']
})
export class MarksComponent implements OnInit {

  public marks = [];
  public carId: any;
  public objectMark: any;

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute) {

      this.marks = this.carsService.marks;

    this.carsService.carsNameEmitter.subscribe((data) => { // subscribe odbiera/przyjmuje dane, a emitter wysyła dane/informacje
      this.carId = data; // tablica marek
      // console.log(this.marks, ' marka');
      this.objectMark = this.carsFilter(data); // object przefiltrowanej tablicy
      console.log(this.objectMark, ' cały object marki');
    });
  }

  ngOnInit() {
    let testfunc = '';

    testfunc = this.testString('Krystian');

    console.log(testfunc);

    this.testVoid();
  }

  public testVoid(): void {
    console.log('testVoid');
  }

  public testString(name: string): string {
    return 'nazywam się: ' + name;
  }

  public carsFilter(carName: string): any { // filtrowanie tablicy z markami samochodów
    let searchMark: any;
    searchMark = this.marks.find((mark) => {
      return mark.name === carName;
    })
    return searchMark;
  }

}
