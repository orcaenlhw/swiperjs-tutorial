import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Router, NavigationExtras } from '@angular/router';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-testmain',
  templateUrl: './testmain.page.html',
  styleUrls: ['./testmain.page.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class TestmainPage implements OnInit {
  @ViewChild('swiper') swiper: SwiperComponent;

  images = ['1','2','3','5','6','7','8','10'];
  count= 0;
  id= 0;

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  ngOnInit() {
    //this.id = this.id + 1;
    console.log("oninit", this.id);
  }

  onSlideChange() {
    console.log('slide changed');
    this.id = this.swiper.swiperRef.activeIndex;
    console.log("iid", this.id);
  }

  back() {
    this.navCtrl.pop();
  }

  toGallery(id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          id: id,
      }
    };
    this.router.navigate(['./testing'], navigationExtras);
  }

}
