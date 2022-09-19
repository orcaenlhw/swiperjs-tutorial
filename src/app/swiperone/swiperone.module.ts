import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwiperonePageRoutingModule } from './swiperone-routing.module';

import { SwiperonePage } from './swiperone.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperonePageRoutingModule,
    SwiperModule
  ],
  declarations: [SwiperonePage]
})
export class SwiperonePageModule {}
