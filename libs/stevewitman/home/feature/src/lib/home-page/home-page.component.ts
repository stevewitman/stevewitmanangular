import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stevewitmanangular-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  ngOnInit() {
    console.log('HomePageComponent');
  }
}
