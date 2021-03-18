import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorsRoutingModule } from './colors-routing.module';
import { ColorPageComponent } from './color-page/color-page.component';


@NgModule({
  declarations: [ColorPageComponent],
  imports: [
    CommonModule,
    ColorsRoutingModule
  ]
})
export class ColorsModule { }
