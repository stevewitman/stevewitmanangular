import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { posts } from './posts';


@Component({
  selector: 'ngnuggets-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  recentPosts: any = [];

  ngOnInit() {
    this.recentPosts = this.getPosts();
  }

  getPosts() {
    return posts.reverse();
  }
}
