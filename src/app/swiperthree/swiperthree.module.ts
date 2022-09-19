import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwiperthreePageRoutingModule } from './swiperthree-routing.module';

import { SwiperthreePage } from './swiperthree.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperthreePageRoutingModule,
    SwiperModule
  ],
  declarations: [SwiperthreePage]
})
export class SwiperthreePageModule {}
