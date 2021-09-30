import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyContent, DummyContentItem } from 'src/app/interfaces/dummyContent';
import * as data from './../../../dev-data/dummy-data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // content: any = data;

  mastheadContent = [];
  trayContent = [];



  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.data.subscribe((res: any) => {
      this.mastheadContent = res.movies.data;
      this.trayContent = res.movies.data;
      console.log(res);
      
    });
  }

  ngOnInit(): void {
  }

}
