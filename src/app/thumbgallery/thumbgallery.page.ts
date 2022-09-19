import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { NavController } from '@ionic/angular';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-thumbgallery',
  templateUrl: './thumbgallery.page.html',
  styleUrls: ['./thumbgallery.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ThumbgalleryPage implements OnInit {

  images = ['1','2','3','5','6','7','8','10'];
  thumbsSwiper: any;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.pop();
  }
}
