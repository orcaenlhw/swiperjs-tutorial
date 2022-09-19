import { Directive, Input, ElementRef, Renderer2, OnInit, HostListener, ViewChild } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appHideAppBar],[appBackNav],[appCartNav],[appShareNav],[appNameNav],[appWishlistNav]'
})

export class HideAppBarDirective implements OnInit {

  @Input("appHideAppBar") toolbar: any;

  @Input("appBackNav") backnav: any;
  @Input("appCartNav") cartnav: any;
  @Input("appShareNav") sharenav: any;

  @Input("appNameNav") namenav: any;
  @Input("appWishlistNav") wishlistnav: any;

  constructor(
    private domCtrl: DomController
  ) { }
  
  ngOnInit() {
    //console.log('TEST', this.toolbar);
    this.toolbar = this.toolbar.el;
    this.backnav = this.backnav.el;
    this.cartnav = this.cartnav.el;
    this.sharenav = this.sharenav.el;
    this.namenav = this.namenav.el;
    this.wishlistnav = this.wishlistnav.el;
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event) {
    let scrollNavBar = $event.detail.scrollTop;
    let scrollName = $event.detail.scrollTop;
    let scrollWishList = $event.detail.scrollTop;

    //console.log("fade top", scrollTop);
    
    if (scrollNavBar >= 130) {
      scrollNavBar = 16769792;
    }

    const hexDist = scrollNavBar.toString(16);
    //console.log("hd value", hexDist);

    this.domCtrl.write(() => {
      this.toolbar.style.setProperty('--background', `#${hexDist}`);
    });

    if (scrollNavBar >= 130 ) {
      this.domCtrl.write(() => {
      this.backnav.style.setProperty('--background', `#ffe300`);
      this.cartnav.style.setProperty('--background', `#ffe300`);
      this.sharenav.style.setProperty('--background', `#ffe300`);
      this.backnav.style.setProperty('box-shadow', 'none');
      this.cartnav.style.setProperty('box-shadow', 'none');
      this.sharenav.style.setProperty('box-shadow', 'none');
      });
    }

    if (scrollNavBar < 130 ) {
      this.domCtrl.write(() => {
      this.backnav.style.setProperty('--background', ``);
      this.cartnav.style.setProperty('--background', ``);
      this.sharenav.style.setProperty('--background', ``);
      this.backnav.style.setProperty('box-shadow', '2px 2px 5px black');
      this.cartnav.style.setProperty('box-shadow', '2px 2px 5px black');
      this.sharenav.style.setProperty('box-shadow', '2px 2px 5px black');
      });
    }

    if (scrollName >= 340 ) {
      this.domCtrl.write(() => {
        this.namenav.style.setProperty('opacity', 1);
      });

    }

    if (scrollName < 340 ) {
      this.domCtrl.write(() => {
        this.namenav.style.setProperty('opacity', 0);
      });

    }

    if (scrollWishList >= 269 ) {
      this.domCtrl.write(() => {
        this.wishlistnav.style.setProperty('opacity', 1);
      });

    }

    if (scrollWishList < 269 ) {
      this.domCtrl.write(() => {
        this.wishlistnav.style.setProperty('opacity', 0);
      });

    }   

  }

}