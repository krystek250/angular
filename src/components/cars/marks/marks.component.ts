import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss']
})
export class MarksComponent implements OnInit {

  public marks = [
    {
      id: 1,
      name: 'Volgswagen',
      cars: [
        {
          name: 'Golf',
          color: 'Czerwony',
          hp: '130KM',
        },
        {
          name: 'Bora',
          color: 'Niebieski',
          hp: '115KM',
        },
        {
          name: 'Passat',
          color: 'Czarny',
          hp: '90KM',
        },
      ]
    },
    {
      id: 2,
      name: 'Audi',
      cars: [
        {
          name: 'A3',
          color: 'Czerwony',
          hp: '130KM',
        },
        {
          name: 'A4',
          color: 'Niebieski',
          hp: '115KM',
        },
        {
          name: 'A6',
          color: 'Czarny',
          hp: '90KM',
        },
      ]
    }
  ]

  public carId: any;

  constructor(private route: ActivatedRoute) {
    this.carId = this.route.snapshot.paramMap.get('id');
    // console.log(this.carId, ' carId');
  }

  ngOnInit() {
  }

}
