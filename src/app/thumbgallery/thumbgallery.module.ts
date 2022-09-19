import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThumbgalleryPageRoutingModule } from './thumbgallery-routing.module';

import { ThumbgalleryPage } from './thumbgallery.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThumbgalleryPageRoutingModule,
    SwiperModule
  ],
  declarations: [ThumbgalleryPage]
})
export class ThumbgalleryPageModule {}
