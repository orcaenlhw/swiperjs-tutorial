import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideAppBarDirective } from './hide-app-bar.directive';
import { ChangePdpDirective } from './change-pdp.directive';



@NgModule({
  declarations: [HideAppBarDirective, ChangePdpDirective],
  imports: [
    CommonModule
  ],
  exports: [HideAppBarDirective, ChangePdpDirective]
})
export class SharedDiectiveModule { }
