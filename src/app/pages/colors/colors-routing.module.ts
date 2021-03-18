import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorPageComponent } from './color-page/color-page.component';

const routes: Routes = [
  {path:'easter/:attribute', component: ColorPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorsRoutingModule { }
