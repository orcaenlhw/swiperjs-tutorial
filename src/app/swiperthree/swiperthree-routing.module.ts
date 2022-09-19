import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwiperthreePage } from './swiperthree.page';

const routes: Routes = [
  {
    path: '',
    component: SwiperthreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwiperthreePageRoutingModule {}
