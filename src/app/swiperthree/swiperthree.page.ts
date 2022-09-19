import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination, EffectCoverflow, SwiperOptions } from 'swiper';

SwiperCore.use([Pagination, EffectCoverflow]);

@Component({
  selector: 'app-swiperthree',
  templateUrl: './swiperthree.page.html',
  styleUrls: ['./swiperthree.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwiperthreePage implements AfterContentChecked {

  @ViewChild('swiper') swiper: SwiperComponent;

  config: SwiperOptions = {
    slidesPerView: 'auto',
    effect: 'coverflow',
    pagination: { clickable: true },
  };

  images = [
    '1','2','3','5','6','7','8','10'
  ];
  
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

}
