import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, {
  FreeMode,
  Navigation,
  SwiperOptions,
  Thumbs,
} from 'swiper';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestingPage implements OnInit {
  @ViewChild('topSwiper') topSwiper: SwiperComponent;

  images = ['1', '2', '3', '5', '6', '7', '8', '10'];
  thumbsSwiper: any;

  id: any;
  topConfig: SwiperOptions = {};
  thumbConfig: SwiperOptions = {};

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getImageID();
  }

  getImageID() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.id = JSON.parse(params['id']);
      console.log('id', this.id);
      this.topConfig = {
        slidesPerView: 1,
        initialSlide: this.id,
      };
      this.thumbConfig = {
        slidesPerView: 3,
        initialSlide: this.id,
      };
    });
  }

  // goToSlide() {
  //   this.topSwiper.swiperRef.slideTo(2, 500, false);
  //   console.log('slide to');
  // }

  // ngAfterVeiwInit() {
   
  //   this.topSwiper.swiperRef.activeIndex = this.id;
  //   console.log('slided');
  // }
  // onschange(){
  //   console.log('slide changed in testing');
  //   this.topSwiper.swiperRef.slideTo(this.id);
  //   console.log("sp", this.swiper);
  //   this.swiper.swiperRef.activeIndex = this.id;
  //   console.log("reached");
  // }

  // onSwiper([topSwiper]) {
  //   console.log('swiped', topSwiper);
  // }

  close() {
    this.router.navigate(['./testmain']);
  }

  back() {
    this.navCtrl.pop();
  }
}
