import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestmainPage } from './testmain.page';

const routes: Routes = [
  {
    path: '',
    component: TestmainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestmainPageRoutingModule {}
