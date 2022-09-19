import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwiperfivePage } from './swiperfive.page';

const routes: Routes = [
  {
    path: '',
    component: SwiperfivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwiperfivePageRoutingModule {}
