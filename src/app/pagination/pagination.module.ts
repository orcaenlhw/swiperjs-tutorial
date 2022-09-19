import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginationPageRoutingModule } from './pagination-routing.module';

import { PaginationPage } from './pagination.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginationPageRoutingModule,
    SwiperModule
  ],
  declarations: [PaginationPage]
})
export class PaginationPageModule {}
