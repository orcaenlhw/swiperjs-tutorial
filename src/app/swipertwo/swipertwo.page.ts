import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-swipertwo',
  templateUrl: './swipertwo.page.html',
  styleUrls: ['./swipertwo.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwipertwoPage implements AfterContentChecked {

  @ViewChild('swiper') swiper: SwiperComponent;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: { clickable: true },
  };

  constructor(
    private navCtrl: NavController
  ) { }

  ngAfterContentChecked() {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

  back() {
    this.navCtrl.pop();
  }

  touchAllowed = false;

  swiperSlideChanged(e) {
    console.log('changed:', e);
  }
  prev() {
    this.swiper.swiperRef.slidePrev(500);
  }

  toggleTouch() {
    this.touchAllowed = !this.touchAllowed;
    this.swiper.swiperRef.allowTouchMove = this.touchAllowed;
  }
  next() {
    this.swiper.swiperRef.slideNext(500);
  }

}
