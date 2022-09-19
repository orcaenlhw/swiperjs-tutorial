import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import { NavController } from '@ionic/angular';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.page.html',
  styleUrls: ['./pagination.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaginationPage implements OnInit {

  images = ['1','2','3','5','6','7','8','10'];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.pop();
  }
}
