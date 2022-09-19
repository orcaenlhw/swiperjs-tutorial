import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-swiperfive',
  templateUrl: './swiperfive.page.html',
  styleUrls: ['./swiperfive.page.scss'],
})
export class SwiperfivePage implements OnInit {

  images = ['1','2','3','4','5','6','7','8','9','10'];

  thumbsSwiper: any;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  close() {
    this.navCtrl.pop();
  }
}
