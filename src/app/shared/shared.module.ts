import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { TrayAreaComponent } from './tray-area/tray-area.component';
import { MastheadAreaComponent } from './masthead-area/masthead-area.component';


@NgModule({
  declarations: [
    TrayAreaComponent,
    MastheadAreaComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    LazyLoadImageModule
  ],
  exports: [
    TrayAreaComponent,
    MastheadAreaComponent
  ],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }], 
})
export class SharedModule { }
