import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SwiperModule  } from 'swiper/angular';
import Swiper, { SwiperOptions, Pagination } from 'swiper';

@Component({
  selector: 'app-swiperone',
  templateUrl: './swiperone.page.html',
  styleUrls: ['./swiperone.page.scss'],
})
export class SwiperonePage implements OnInit {

  public swiperConfig: SwiperOptions = {
    pagination: true,

  };

  constructor(
    private navCtrl: NavController, 
    private router: Router
    ) { }

  ngOnInit() {
    Swiper.use([Pagination]);
  }

  back() {
    this.navCtrl.pop();
  }
  

}
