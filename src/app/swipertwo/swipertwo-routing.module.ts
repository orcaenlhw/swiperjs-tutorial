import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwipertwoPage } from './swipertwo.page';

const routes: Routes = [
  {
    path: '',
    component: SwipertwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwipertwoPageRoutingModule {}
