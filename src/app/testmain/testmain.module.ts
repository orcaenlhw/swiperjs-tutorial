import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestmainPageRoutingModule } from './testmain-routing.module';

import { TestmainPage } from './testmain.page';
import { SwiperModule } from 'swiper/angular';
import { SharedDiectiveModule } from '../directives/shared-diective.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestmainPageRoutingModule,
    SwiperModule,
    SharedDiectiveModule
  ],
  declarations: [TestmainPage]
})
export class TestmainPageModule {}
