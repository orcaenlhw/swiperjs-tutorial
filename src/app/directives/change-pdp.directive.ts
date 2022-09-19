import { Directive, Input, ElementRef, Renderer2, OnInit, HostListener, ViewChild } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appNameNav],[wishlistNav]'
})
export class ChangePdpDirective implements OnInit {

  @Input("appNameNav") namenav: any;
  @Input("appWishlistNav") wishlistnav: any;

  constructor(
    private domCtrl: DomController,
    private renderer: Renderer2,
    private element: ElementRef
  ) { }
  
  
  ngOnInit() {
    //console.log('TEST', this.toolbar);
    this.namenav = this.namenav.el;
    this.wishlistnav = this.wishlistnav.el;
  }

  
  @HostListener('ionScroll', ['$event']) onContentScroll($event) {
    let scrollTop = $event.detail.scrollTop;
    let scrollName = $event.detail.scrollTop;

    //console.log("fade top", scrollTop);
    
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

    if (scrollTop >= 269 ) {
      this.domCtrl.write(() => {
        this.wishlistnav.style.setProperty('opacity', 1);
      });

    }

    if (scrollTop < 269 ) {
      this.domCtrl.write(() => {
        this.wishlistnav.style.setProperty('opacity', 0);
      });

    }

  }

}