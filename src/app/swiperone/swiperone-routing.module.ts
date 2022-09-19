import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwiperonePage } from './swiperone.page';

const routes: Routes = [
  {
    path: '',
    component: SwiperonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwiperonePageRoutingModule {}
