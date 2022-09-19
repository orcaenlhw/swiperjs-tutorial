import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwiperfourPageRoutingModule } from './swiperfour-routing.module';

import { SwiperfourPage } from './swiperfour.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperfourPageRoutingModule,
    SwiperModule
  ],
  declarations: [SwiperfourPage]
})
export class SwiperfourPageModule {}
