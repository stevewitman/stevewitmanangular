import { Component } from '@angular/core';

@Component({
  selector: 'admin-ngnuggets-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
})
export class PostsPageComponent {
  secondaryNavItems = [
    { name: 'Posts', path: 'posts' },
    { name: 'Add Post', path: 'add-post' },
    { name: 'Sources', path: 'add-post' },
    { name: 'Authors', path: 'add-post' },
    { name: 'Speakers', path: 'add-post' },
    { name: 'Tags', path: 'add-post' },
  ];

}
