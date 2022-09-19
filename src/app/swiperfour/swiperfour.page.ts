import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Pagination, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Pagination, Thumbs]);

@Component({
  selector: 'app-swiperfour',
  templateUrl: './swiperfour.page.html',
  styleUrls: ['./swiperfour.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperfourPage implements OnInit {

  images = ['1','2','3','4','5','6','7','8','9','10'];

  thumbsSwiper: any;

  constructor(
    private navCtrl: NavController
  ) { }
  
  ngOnInit() {
    
  }

  close() {
    this.navCtrl.pop();
  }

}
