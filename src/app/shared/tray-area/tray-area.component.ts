import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tray-area',
  templateUrl: './tray-area.component.html',
  styleUrls: ['./tray-area.component.scss']
})
export class TrayAreaComponent implements OnInit {
  @Input() trayContent: any

  constructor() { }

  ngOnInit() {

  }

  slideConfig = {
    // slidesToShow: 8.5,
    slidesToScroll: 8,
    infinite: false,
    arrows: true,
    center: false,
    autoplay: false,
    autoplaySpeed: 2000,
    variableWidth: true,
    prevArrow: "<i class='previous-arrow'></i>",
    nextArrow: "<i class='next-arrow'></i>"
  };
}
