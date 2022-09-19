import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwipertwoPageRoutingModule } from './swipertwo-routing.module';

import { SwipertwoPage } from './swipertwo.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwipertwoPageRoutingModule,
    SwiperModule
  ],
  declarations: [SwipertwoPage]
})
export class SwipertwoPageModule {}
