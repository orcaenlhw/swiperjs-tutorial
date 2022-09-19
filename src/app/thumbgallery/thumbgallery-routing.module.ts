import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThumbgalleryPage } from './thumbgallery.page';

const routes: Routes = [
  {
    path: '',
    component: ThumbgalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThumbgalleryPageRoutingModule {}
