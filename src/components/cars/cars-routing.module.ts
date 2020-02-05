import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars.component';
import { MarksComponent } from './marks/marks.component';

const routes: Routes = [
  {
    path: 'cars', component: CarsComponent,
    children: [
      { path: 'marks/:name/:id', component: MarksComponent},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CarsRoutingModule { }
