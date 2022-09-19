import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwiperfivePageRoutingModule } from './swiperfive-routing.module';

import { SwiperfivePage } from './swiperfive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperfivePageRoutingModule
  ],
  declarations: [SwiperfivePage]
})
export class SwiperfivePageModule {}
