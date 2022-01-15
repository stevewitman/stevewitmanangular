import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'admin-ngnuggets-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  mainNavItems = [
    { name: 'home', path: '' },
    { name: 'posts', path: 'posts' },
    { name: 'newsletter', path: 'posts', alerts: 2 },
    { name: 'sponsors', path: 'sponsors' },
    { name: 'donations', path: 'donations', alerts: 1 },
    { name: 'messages', path: 'messages' },
    { name: 'users', path: 'users' },
  ];

  // { name: 'authors', path: 'authors'}
  // { name: 'speakers', path: 'speakers'}
  // { name: 'tags', path: 'tags'}

  constructor(private breakpointObserver: BreakpointObserver) {}
} 
