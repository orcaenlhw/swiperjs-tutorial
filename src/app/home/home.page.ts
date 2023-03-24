import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { SwiperComponent, } from "swiper/angular";
import SwiperCore, { Pagination, Navigation, SwiperOptions } from "swiper";

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePage {
  @ViewChild('swiper') swiper: SwiperComponent;
  
  constructor(
    private router: Router,
    private navCtrl: NavController
  ) {

  }
  images = ['1','2','3','5','6','7','8','10'];

  // config: SwiperOptions = {
  //   slidesPerView: 1,
  //   navigation: true,
  //   pagination: { clickable: true },
  //   scrollbar: { draggable: true },
  // };
  
  //not working
  // onSwiper([swiper]) {
  //   console.log(swiper);
  // }
  
  // onBigSlideChange() {
  //   console.log('slide change big');
  // }

  // public smallSwiper: SwiperOptions = {
  //   slidesPerView: 5,
  //   navigation: true,
  //   pagination: { clickable: true },
  //   scrollbar: { draggable: true },
  // };
  
  //not working
  // onSwiper([swiper]) {
  //   console.log(swiper);
  // }

  // onSmallSlideChange() {
  //   console.log('slide change small');
  // }

    
  // slideNext(){
  //   this.swiper.swiperRef.slideNext(100);
  // }
  // slidePrev(){
  //   this.swiper.swiperRef.slidePrev(100);
  // }

  // onSwiper(params: EventsParams['swiper']) {
  //   const [swiper] = params;
  //   console.log(swiper);
  // }
  // beforeTransitionStart(params: EventsParams['beforeSlideChangeStart']) {
  //   const [swiper, speed, internal] = params;
  //   console.log('beforeTransitionStart, speed: ' + speed);
  // }

  // slides = Array.from({ length: 1000 }).map(
  //   (el, index) => `Slide ${index + 1}`
  // );

  ngOnInit() {

  }

  swiperOneClicked() {
    this.router.navigate(['./swiperone']);
  }

  swiperTwoClicked() {
    this.router.navigate(['./swipertwo']);
  }

  swiperThreeClicked() {
    this.router.navigate(['./swiperthree']);
  }

  swiperFourClicked() {
    this.router.navigate(['./swiperfour']);
  }

  swiperFiveClicked() {
    this.router.navigate(['./swiperfive']);
  }
  
  paginationClicked() {
    this.router.navigate(['./pagination']);
  }

  thumbgalleryClicked() {
    this.router.navigate(['./thumbgallery']);
  }

  testingClicked() {
    this.router.navigate(['./testing']);
  }

  testmainClicked() {
    this.router.navigate(['./testmain']);
  }
}
