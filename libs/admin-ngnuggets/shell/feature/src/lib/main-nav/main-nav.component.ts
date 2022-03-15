import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { User } from '@angular/fire/auth';

import { AuthService } from '@stevewitmanangular/shared/data-access/auth';
import { map, Observable, of, shareReplay } from 'rxjs';

@Component({
  selector: 'admin-ngnuggets-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  userAuthStatus$: Observable<User | null> = of(null);

  // isLoggedIn$: Observable<any> | null = of(null);

  mainNavItems = [
    { name: 'home', path: '' },
    { name: 'posts', path: 'posts' },
    { name: 'newsletter', path: 'posts', alerts: 2 },
    { name: 'sponsors', path: 'sponsors' }, 
    { name: 'donations', path: 'donations', alerts: 1 },
    { name: 'messages', path: 'messages' },
    { name: 'users', path: 'users' },
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userAuthStatus$ = this.authService.getUserAuthState();
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle();
  }
  
  signOutWithGoogle() {
    this.authService.signOutWithGoogle();
  }
} 
