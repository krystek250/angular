import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelsComponent } from './marks/models/models.component';
import { MarksComponent } from './marks/marks.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MarksComponent, ModelsComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    MarksComponent,
    ModelsComponent
  ]
})
export class ModelModule { }
