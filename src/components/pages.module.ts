import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MotorcyclesComponent } from './motorcycles/motorcycles.component';
import { CarsComponent } from './cars/cars.component';
import { BicyclesComponent } from './bicycles/bicycles.component';
import { ModelModule } from './cars/model.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent, 
    MotorcyclesComponent, 
    CarsComponent, 
    BicyclesComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ModelModule
  ],
  exports: [
    HomeComponent,
    MotorcyclesComponent,
    CarsComponent,
    BicyclesComponent
  ]
})
export class PagesModule { }
