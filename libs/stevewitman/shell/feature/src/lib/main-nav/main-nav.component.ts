import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import {
  animate,
  group,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

// import { User } from '@angular/fire/auth';
import { Observable, of, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { User } from '@angular/fire/auth';

import { AuthService } from '@stevewitmanangular/shared/data-access/auth';

@Component({
  selector: 'stevewitmanangular-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('staggerList', [
      transition(':enter', [
        style({ height: '0px' }),
        group([
          animate('250ms ease-in-out', style({ height: '*', opacity: 1 })),
          query('a', style({ opacity: 0 }), { optional: true }),
          query(
            'a',
            stagger('40ms', [
              animate(
                '40ms ease-in-out',
                style({
                  opacity: 1,
                })
              ),
            ]),
            { optional: true }
          ),
        ]),
      ]),
      transition(':leave', [
        style({ height: '*' }),
        group([
          animate('250ms ease-out', style({ height: '0px', opacity: 1 })),
          query('a', style({ opacity: 1 }), { optional: true }),
          query(
            'a',
            stagger('-40ms', [
              animate(
                '40ms ease-out',
                style({
                  opacity: 0,
                })
              ),
            ]),
            { optional: true }
          ),
        ]),
      ]),
    ]),
    trigger('routeAnimations', [
      transition('* <=> *', [style({ opacity: 0 }), animate('400ms ease-in')]),
    ]),
  ],
})
export class MainNavComponent implements OnInit, AfterViewInit, OnDestroy {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.XSmall)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  userAuthStatus$: Observable<User | null> = of(null);
  isHandsetSubscription$: Subscription| null = null;

  isHandset!: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // TODO handle subscription
    this.isHandsetSubscription$ = this.isHandset$.subscribe((value) => {
      this.isHandset = value;
    });
    this.userAuthStatus$ = this.authService.getUserAuthState();
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy() {
    if (this.isHandsetSubscription$)  {
      this.isHandsetSubscription$.unsubscribe();
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['position']
    );
  }

  signInWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then(() => {
        // Sign-out successful.
        console.log('Signed In With Google');
      })
      .catch((error) => {
        // An error happened.
        console.log('ERROR occurred while Signing In With Google...');
        console.log('ERROR message:', error);
      });;
  }

  signOutWithGoogle() {
    this.authService
      .signOutWithGoogle()
      .then(() => {
        // Sign-out successful.
        console.log('Signed Out With Google');
      })
      .catch((error) => {
        // An error happened.
        console.log('ERROR occurred while Signing Out With Google...');
        console.log('ERROR message:', error);
      });
  }
}
